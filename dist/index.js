"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@actions/core");
const main_1 = __importDefault(require("./main"));
const utils_1 = require("./utils");
(0, core_1.info)(`Check Licenses Action v${utils_1.appVersion}`);
try {
    (0, main_1.default)().then((output) => {
        (0, core_1.setOutput)("message", output);
    });
}
catch (e) {
    if (e instanceof Error) {
        (0, core_1.setFailed)(e.message);
    }
    else {
        (0, core_1.setFailed)(String(e));
    }
}
