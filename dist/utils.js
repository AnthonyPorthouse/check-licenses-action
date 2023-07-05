"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.detectManifests = exports.octokit = exports.appVersion = exports.appName = void 0;
const core_1 = __importDefault(require("@actions/core"));
const github_1 = __importDefault(require("@actions/github"));
_a = require("../package.json"), exports.appName = _a.name, exports.appVersion = _a.version; // eslint-disable-line @typescript-eslint/no-var-requires
exports.octokit = github_1.default.getOctokit(core_1.default.getInput("token"), {
    userAgent: `${exports.appName} / ${exports.appVersion}`,
});
function detectManifests() {
    return __awaiter(this, void 0, void 0, function* () {
        const [owner, repo] = core_1.default.getInput("repo").split("/", 2);
        const ref = core_1.default.getInput("current_sha");
        const content = yield exports.octokit.rest.repos.getContent({ owner, repo, path: "", ref });
        const manifests = [];
        if (!Array.isArray(content)) {
            return manifests;
        }
        content.forEach((file) => {
            if ()
                ;
        });
    });
}
exports.detectManifests = detectManifests;
exports.default = { octokit: exports.octokit, appName: exports.appName, appVersion: exports.appVersion };
