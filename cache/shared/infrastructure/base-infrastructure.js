"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseInfrastructure = void 0;
class BaseInfrastructure {
    update(driver) {
        throw new Error("Method not implemented.");
    }
    delete(id) {
        throw new Error("Method not implemented.");
    }
    findById(id) {
        throw new Error("Method not implemented.");
    }
    findAll() {
        return Promise.resolve([{ username: "user" }, { username: "user 2" }]);
    }
    insert(driver) {
        return Promise.resolve(driver);
    }
}
exports.BaseInfrastructure = BaseInfrastructure;
//# sourceMappingURL=base-infrastructure.js.map