"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HistoryApplication = void 0;
class HistoryApplication {
    /* Para no usar dependencias ocultas usamos a HistoryRepository */
    constructor(repositoryHistory) {
        this.repositoryHistory = repositoryHistory;
    }
    async add(history) {
        return await this.repositoryHistory.insert(history);
    }
    async update(history) {
        return await this.repositoryHistory.update(history);
    }
    async delete(id) {
        return await this.repositoryHistory.delete(id);
    }
    async findById(id) {
        return await this.repositoryHistory.findById(id);
    }
    async findAll() {
        return await this.repositoryHistory.findAll();
    }
    async getReportByHistory(id) {
        return await this.repositoryHistory.getReportByHistory(id);
    }
}
exports.HistoryApplication = HistoryApplication;
//# sourceMappingURL=history.application.js.map