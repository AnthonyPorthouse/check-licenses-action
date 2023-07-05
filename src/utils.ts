import core from "@actions/core";
import github from "@actions/github";

export const {
  name: appName,
  version: appVersion,
} = require("../package.json"); // eslint-disable-line @typescript-eslint/no-var-requires

export const octokit = github.getOctokit(core.getInput("token"), {
  userAgent: `${appName} / ${appVersion}`,
});

export default { octokit, appName, appVersion };
