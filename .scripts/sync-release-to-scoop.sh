# Push new manifest to the Scoop bucket repository.
#
# Usage: .scripts/sync-release-to-scoop.sh

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

# Update the manifest in .assets/templates/scoop.json with the new version.
sed -i '' "s/{{PSPACE_VERSION}}/${version_number}/" .assets/templates/scoop.json

# Download the release assets
curl -s https://api.github.com/repos/Paperspace/cli/releases/${version} | grep browser_download_url | cut -d '"' -f 4 | xargs -n 1 curl -LO

# Generate the SHA256 checksums for the release assets cutting off the file name
pspace_windows_sha256=$(shasum -t -a 256 pspace-windows.zip | cut -d ' ' -f 1)

# Update the manifest in .assets/templates/scoop.json with the new checksums.
sed -i '' "s/{{PSPACE_WINDOWS_SHA256}}/${pspace_windows_sha256}/" .assets/templates/scoop.json

# Create a temporary directory to clone the scoop bucket repository.
mkdir -p /tmp
cd tmp

# Clone the scoop bucket repository.
gh auth login --with-token ${GITHUB_TOKEN}
gh repo clone Paperspace/scoop-bucket.git

# Checkout a new branch for the new version.
cd scoop-bucket
git checkout -b "psbot/update-pspace-to-${version_number}"

# Copy the manifest to the scoop bucket repository.
cp ../../.assets/templates/scoop.json pspace.json

# Add the manifest to the scoop repository.
git add pspace.json

# Commit the manifest to the scoop repository.
git commit -m "chore: update pspace to ${version_number}"

# Push the manifest to the tap repository.
git push --set-upstream origin "psbot/update-pspace-to-${version_number}"

# Open a pull request to merge the new version into the tap repository.
gh pr create --title "chore: update pspace to ${version_number}" --body "Update `pspace` to ${version_number}" --base main --head "psbot/update-pspace-to-${version_number}" --label "psbot"