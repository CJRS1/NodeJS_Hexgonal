"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HistoryInfrastructure = void 0;
const base_infrastructure_1 = require("../../shared/infrastructure/base-infrastructure");
const history_entity_1 = require("../domain/models/history.entity");
class HistoryInfrastructure extends base_infrastructure_1.BaseInfrastructure {
    constructor() {
        super(history_entity_1.HistoryEntity);
    }
    getReportByHistory(id) {
        throw new Error("Method not implemented.");
    }
}
exports.HistoryInfrastructure = HistoryInfrastructure;
//# sourceMappingURL=history.infrastructure.js.map