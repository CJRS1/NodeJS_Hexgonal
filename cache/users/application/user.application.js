"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserApplication = void 0;
const base_application_1 = require("../../shared/application/interface/base.application");
const dto_1 = require("./dto/dto");
class UserApplication extends base_application_1.BaseApplication {
    /* Para no usar dependencias ocultas usamos a UserRepository */
    constructor(repositoryUser) {
        super(repositoryUser, new dto_1.UserDTO(), "UserApplication");
        this.repositoryUser = repositoryUser;
    }
}
exports.UserApplication = UserApplication;
//# sourceMappingURL=user.application.js.map