import core from "@actions/core";
import main from "./main";

import { appVersion } from "./utils";

core.info(`Check Licenses Action v${appVersion}`);

try {
  main().then((output) => {
    core.setOutput("message", output);
  });
} catch (e) {
  if (e instanceof Error) {
    core.setFailed(e.message);
  } else {
    core.setFailed(String(e));
  }
}
