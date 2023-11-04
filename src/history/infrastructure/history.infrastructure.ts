import { BaseInfrastructure } from "../../shared/infrastructure/base-infrastructure";
import { HistoryModel } from "../domain/models/history.model"
import { HistoryRepository } from "../domain/repositories/history.repository";

export class HistoryInfrastructure extends BaseInfrastructure<HistoryModel, number> implements HistoryRepository {
        getReportByHistory(id: number): Promise<HistoryModel[]>{
            throw new Error("Method not implemented.");
            
        }
}