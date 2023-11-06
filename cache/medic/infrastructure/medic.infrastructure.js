"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MedicInfrastructure = void 0;
const base_infrastructure_1 = require("../../shared/infrastructure/base-infrastructure");
const medic_entity_1 = require("../domain/models/medic.entity");
class MedicInfrastructure extends base_infrastructure_1.BaseInfrastructure {
    constructor() {
        super(medic_entity_1.MedicEntity);
    }
    getReportByMedic(id) {
        throw new Error("Method not implemented.");
    }
}
exports.MedicInfrastructure = MedicInfrastructure;
//# sourceMappingURL=medic.infrastructure.js.map