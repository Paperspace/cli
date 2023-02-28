# Push new formula to the Homebrew tap repository.
#
# Usage: .scripts/sync-release-to-tap.sh

set -e

# Get the current version from the GitHub release.

# Use the latest release tag name if no argument is passed.
if [ -z "$1" ]; then
  version=$(curl -s https://api.github.com/repos/Paperspace/cli/releases/latest | grep tag_name | cut -d '"' -f 4)
else
  version=$1
fi

# Replace the "v" in the version string with an empty string.
version_number=${version#?}

# Update the formula in .assets/templates/brew.rb with the new version.
sed -i '' "s/{{PSPACE_VERSION}}/${version_number}/" .assets/templates/brew.rb

# Download the release assets
curl -s https://api.github.com/repos/Paperspace/cli/releases/${version} | grep browser_download_url | cut -d '"' -f 4 | xargs -n 1 curl -LO

# Generate the SHA256 checksums for the release assets cutting off the file name
pspace_macos_sha256=$(shasum -t -a 256 pspace-macos.zip | cut -d ' ' -f 1)
pspace_macos_arm_sha256=$(shasum -t -a 256 pspace-macos-arm.zip | cut -d ' ' -f 1)
pspace_linux_sha256=$(shasum -t -a 256 pspace-linux.zip | cut -d ' ' -f 1)

# Update the formula in .assets/templates/brew.rb with the new checksums.
sed -i '' "s/{{PSPACE_MACOS_SHA256}}/${pspace_macos_sha256}/" .assets/templates/brew.rb
sed -i '' "s/{{PSPACE_MACOS_ARM_SHA256}}/${pspace_macos_arm_sha256}/" .assets/templates/brew.rb
sed -i '' "s/{{PSPACE_LINUX_SHA256}}/${pspace_linux_sha256}/" .assets/templates/brew.rb

# Create a temporary directory to clone the tap repository.
mkdir -p /tmp
cd tmp

# Clone the tap repository.
gh auth login --with-token ${GITHUB_TOKEN}
gh repo clone Paperspace/homebrew-tap.git

# Checkout a new branch for the new version.
cd homebrew-tap
git checkout -b "psbot/update-pspace-to-${version_number}"

# Copy the formula to the tap repository.
cp ../../.assets/templates/brew.rb Formula/pspace.rb

# Add the formula to the tap repository.
git add Formula/pspace.rb

# Commit the formula to the tap repository.
git commit -m "chore: update pspace to ${version_number}"

# Push the formula to the tap repository.
git push --set-upstream origin "psbot/update-pspace-to-${version_number}"

# Open a pull request to merge the new version into the tap repository.
gh auth login --with-token ${GITHUB_TOKEN}
gh pr create --title "chore: update pspace to ${version_number}" --body "Update `pspace` to ${version_number}" --base main --head "psbot/update-pspace-to-${version_number}" --label "psbot"