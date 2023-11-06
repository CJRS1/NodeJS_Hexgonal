"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HistoryApplication = void 0;
const base_application_1 = require("src/shared/application/interface/base.application");
class HistoryApplication extends base_application_1.BaseApplication {
    /* Para no usar dependencias ocultas usamos a HistoryRepository */
    constructor(repositoryHistory) {
        super(repositoryHistory);
        this.repositoryHistory = repositoryHistory;
    }
    async getReportByHistory(id) {
        return await this.repositoryHistory.getReportByHistory(id);
    }
}
exports.HistoryApplication = HistoryApplication;
//# sourceMappingURL=history.application.js.map