"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserInfrastructure = void 0;
const base_infrastructure_1 = require("../../shared/infrastructure/base-infrastructure");
class UserInfrastructure extends base_infrastructure_1.BaseInfrastructure {
    callProcedure(input) {
        return Promise.resolve(true);
    }
}
exports.UserInfrastructure = UserInfrastructure;
//# sourceMappingURL=user.infrastructure.js.map