import { info, setOutput, setFailed } from "@actions/core";
import main from "./main";

import { appVersion } from "./utils";

info(`Check Licenses Action v${appVersion}`);

try {
  main().then((output) => {
    setOutput("message", output);
  });
} catch (e) {
  if (e instanceof Error) {
    setFailed(e.message);
  } else {
    setFailed(String(e));
  }
}
