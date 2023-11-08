"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserInfrastructure = void 0;
const base_infrastructure_1 = require("../../shared/infrastructure/base-infrastructure");
const user_entity_1 = require("../domain/models/user.entity");
class UserInfrastructure extends base_infrastructure_1.BaseInfrastructure {
    constructor() {
        super(user_entity_1.UserEntity, "UserInfrastructure");
    }
}
exports.UserInfrastructure = UserInfrastructure;
//# sourceMappingURL=user.infrastructure.js.map