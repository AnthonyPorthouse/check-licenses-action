import { execFileSync } from "node:child_process";

export function getPackageLicense(name: string, version: string) {
  return execFileSync("npm", [`${name}@${version}`, "license"], {
    encoding: "utf-8",
  });
}
