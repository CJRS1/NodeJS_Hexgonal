"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const http_1 = __importDefault(require("http"));
const bootstrap_1 = __importDefault(require("./bootstrap"));
const app_1 = __importDefault(require("../app"));
class ServerBoostrap extends bootstrap_1.default {
    initialize() {
        return new Promise((resolve, reject) => {
            const server = http_1.default.createServer(app_1.default);
            server.listen(3000)
                .on("listening", () => {
                resolve(true);
                console.log('Listening on PORT 3000');
            })
                .on("error", reject);
        });
    }
}
exports.default = ServerBoostrap;
//# sourceMappingURL=server.bootstrap.js.map