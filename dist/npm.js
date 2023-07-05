"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPackageLicense = void 0;
const node_child_process_1 = require("node:child_process");
function getPackageLicense(name, version) {
    return (0, node_child_process_1.execFileSync)("npm", [`${name}@${version}`, "license"], {
        encoding: "utf-8",
    });
}
exports.getPackageLicense = getPackageLicense;
