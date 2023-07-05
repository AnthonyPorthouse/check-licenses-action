"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = __importDefault(require("@actions/core"));
const behaviour_1 = require("./behaviour");
const utils_1 = require("./utils");
core_1.default.info(`Check Licenses Action v${utils_1.appVersion}`);
try {
    (0, behaviour_1.main)().then((output) => {
        core_1.default.setOutput("message", output);
    });
}
catch (e) {
    if (e instanceof Error) {
        core_1.default.setFailed(e.message);
    }
    else {
        core_1.default.setFailed(String(e));
    }
}
