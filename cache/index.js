"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const database_bootstrap_1 = __importDefault(require("./bootstrap/database.bootstrap"));
const server_bootstrap_1 = __importDefault(require("./bootstrap/server.bootstrap"));
const serverBootstrap = new server_bootstrap_1.default();
const databaseBootstrap = new database_bootstrap_1.default();
(async () => {
    try {
        const tasks = [
            serverBootstrap.initialize(),
            databaseBootstrap.initialize(),
        ];
        const tasksCompleted = await Promise.all(tasks);
        const options = Object.assign({}, tasksCompleted[1].options);
        console.log("Connected to database", options.database, options.host, options.port, options.logging);
    }
    catch (err) {
        console.error("Error", err);
    }
})();
//# sourceMappingURL=index.js.map