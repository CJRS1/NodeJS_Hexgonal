"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserApplication = void 0;
const base_application_1 = require("../../shared/application/interface/base.application");
class UserApplication extends base_application_1.BaseApplication {
    /* Para no usar dependencias ocultas usamos a UserRepository */
    constructor(repositoryUser) {
        super(repositoryUser);
        this.repositoryUser = repositoryUser;
    }
}
exports.UserApplication = UserApplication;
//# sourceMappingURL=user.application.js.map