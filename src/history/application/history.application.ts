import { BaseApplication } from "src/shared/application/interface/base.application";
import { HistoryModel } from "../domain/models/history.model";
import { HistoryRepository } from "../domain/repositories/history.repository";

export class HistoryApplication extends BaseApplication<HistoryModel> {
    /* Para no usar dependencias ocultas usamos a HistoryRepository */
    constructor(private repositoryHistory: HistoryRepository) {
        super(repositoryHistory);
    }

    async getReportByHistory(id: number) {
        return await this.repositoryHistory.getReportByHistory(id);
    }
}