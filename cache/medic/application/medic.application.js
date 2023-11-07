"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MedicApplication = void 0;
const base_application_1 = require("../../shared/application/interface/base.application");
class MedicApplication extends base_application_1.BaseApplication {
    /* Para no usar dependencias ocultas usamos a MedicRepository */
    constructor(repositoryMedic) {
        super(repositoryMedic);
        this.repositoryMedic = repositoryMedic;
    }
    async getReportByMedic(id) {
        return await this.repositoryMedic.getReportByMedic(id);
    }
}
exports.MedicApplication = MedicApplication;
//# sourceMappingURL=medic.application.js.map