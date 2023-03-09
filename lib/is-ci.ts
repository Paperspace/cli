export const isCI = !!(
  Deno.env.get("CI") !== "false" && // Bypass all checks if CI env is explicitly set to 'false'
  (Deno.env.get("BUILD_ID") || // Jenkins, Cloudbees
    Deno.env.get("BUILD_NUMBER") || // Jenkins, TeamCity
    Deno.env.get("CI") || // Travis CI, CircleCI, Cirrus CI, Gitlab CI, Appveyor, CodeShip, dsari
    Deno.env.get("CI_APP_ID") || // Appflow
    Deno.env.get("CI_BUILD_ID") || // Appflow
    Deno.env.get("CI_BUILD_NUMBER") || // Appflow
    Deno.env.get("CI_NAME") || // Codeship and others
    Deno.env.get("CONTINUOUS_INTEGRATION") || // Travis CI, Cirrus CI
    Deno.env.get("RUN_ID") || // TaskCluster, dsari
    false)
);
