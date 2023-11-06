/* import { DriverModel } from "../models/driver.model"

export interface DriverRepository{
    insert(driver: DriverModel): Promise<DriverModel>
    update(driver: DriverModel): Promise<DriverModel>
    delete(id: number): Promise<boolean>
    findById(id: number): Promise<DriverModel>
    findAll(): Promise<DriverModel[]>
} */

import Result from "src/shared/application/interface/result.interface";
import { BaseRepository } from "../../../shared/domain/base-repository";
import { DriverModel } from "../models/driver.model";

/* En herencia no se puede poner T */
export interface DriverRepository extends BaseRepository<DriverModel, number>{
    getAll(where: object): Promise<Result<DriverModel>>;
    getReportByDriver(id: number): Promise<DriverModel[]>
}

