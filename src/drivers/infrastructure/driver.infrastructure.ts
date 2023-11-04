import { BaseInfrastructure } from "../../shared/infrastructure/base-infrastructure";
import { DriverModel } from "../domain/models/driver.model"
import { DriverRepository } from "../domain/repositories/driver.repository";

export class DriverInfrastructure extends BaseInfrastructure<DriverModel, number> implements DriverRepository {
        getReportByDriver(id: number): Promise<DriverModel[]>{
            throw new Error("Method not implemented.");
            
        }
}