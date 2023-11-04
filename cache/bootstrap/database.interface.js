"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const bootstrap_1 = require("./bootstrap");
class DatabaseBootstrap extends bootstrap_1.DatabaseListen {
    listen() {
        throw new Error("Method not implemented");
    }
    initialize() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(true);
                console.log("Connected to Database");
            }, 2000);
        });
    }
}
exports.default = DatabaseBootstrap;
//# sourceMappingURL=database.interface.js.map