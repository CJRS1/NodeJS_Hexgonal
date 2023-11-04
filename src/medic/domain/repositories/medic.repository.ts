/* import { MedicModel } from "../models/medic.model"

export interface MedicRepository{
    insert(medic: MedicModel): Promise<MedicModel>
    update(medic: MedicModel): Promise<MedicModel>
    delete(id: number): Promise<boolean>
    findById(id: number): Promise<MedicModel>
    findAll(): Promise<MedicModel[]>
} */

import { BaseRepository } from "../../../shared/domain/base-repository";
import { MedicModel } from "../models/medic.model";

/* En herencia no se puede poner T */
export interface MedicRepository extends BaseRepository<MedicModel, number>{
    getReportByMedic(id: number): Promise<MedicModel[]>
}

