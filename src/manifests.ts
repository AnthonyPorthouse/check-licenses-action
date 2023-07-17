import * as core from "@actions/core";
import { components } from "@octokit/openapi-types";
import { octokit } from "./utils";

export type Manifest = "npm" | "composer";

export async function detectManifests(): Promise<Manifest[]> {
  const [owner, repo] = core.getInput("repo").split("/", 2);
  const ref = core.getInput("current_sha");

  const content = await octokit.rest.repos.getContent({
    owner,
    repo,
    path: "",
    ref,
  });

  const manifests: Manifest[] = [];

  type DirectoryItem = components["schemas"]["content-directory"][number];

  if (!Array.isArray(content)) {
    return manifests;
  }

  content.forEach((file: DirectoryItem) => {
    if (file.name === "package-lock.json") {
      manifests.push("npm");
    }

    if (file.name === "composer.lock") {
      manifests.push("composer");
    }
  });

  return manifests;
}
