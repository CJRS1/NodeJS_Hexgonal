"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const database_interface_1 = __importDefault(require("./bootstrap/database.interface"));
const server_bootstrap_1 = __importDefault(require("./bootstrap/server.bootstrap"));
const serverBoostrap = new server_bootstrap_1.default();
const databaseBootstrap = new database_interface_1.default();
(async () => {
    try {
        await serverBoostrap.initialize();
        await databaseBootstrap.initialize();
    }
    catch (err) {
        console.error(err);
    }
})();
//# sourceMappingURL=index.js.map