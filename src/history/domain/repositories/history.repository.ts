/* import { HistoryModel } from "../models/history.model"

export interface HistoryRepository{
    insert(history: HistoryModel): Promise<HistoryModel>
    update(history: HistoryModel): Promise<HistoryModel>
    delete(id: number): Promise<boolean>
    findById(id: number): Promise<HistoryModel>
    findAll(): Promise<HistoryModel[]>
} */

import { BaseRepository } from "../../../shared/domain/base-repository";
import { HistoryModel } from "../models/history.model";

/* En herencia no se puede poner T */
export interface HistoryRepository extends BaseRepository<HistoryModel, number>{
    getReportByHistory(id: number): Promise<HistoryModel[]>
}

