import DatabaseBootstrap from "../../bootstrap/database.interface";
import { BaseInfrastructure } from "../../shared/infrastructure/base-infrastructure";
import { DriverEntity } from "../domain/models/driver.entity";
import { DriverModel } from "../domain/models/driver.model"
import { DriverRepository } from "../domain/repositories/driver.repository";

export class DriverInfrastructure extends BaseInfrastructure<DriverModel, number> implements DriverRepository {
    /* Sobreescribiendo */
    override findAll(): Promise<DriverModel[]> {
        const dataSource = DatabaseBootstrap.dataSource;
        const repository = dataSource.getRepository(DriverEntity);
        return repository.find();
    }
    getReportByDriver(id: number): Promise<DriverModel[]> {
        throw new Error("Method not implemented.");

    }
}