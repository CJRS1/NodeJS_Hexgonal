"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MedicApplication = void 0;
class MedicApplication {
    /* Para no usar dependencias ocultas usamos a MedicRepository */
    constructor(repositoryMedic) {
        this.repositoryMedic = repositoryMedic;
    }
    async add(medic) {
        return await this.repositoryMedic.insert(medic);
    }
    async update(medic) {
        return await this.repositoryMedic.update(medic);
    }
    async delete(id) {
        return await this.repositoryMedic.delete(id);
    }
    async findById(id) {
        return await this.repositoryMedic.findById(id);
    }
    async findAll() {
        return await this.repositoryMedic.findAll();
    }
    async getReportByMedic(id) {
        return await this.repositoryMedic.getReportByMedic(id);
    }
}
exports.MedicApplication = MedicApplication;
//# sourceMappingURL=medic.application.js.map