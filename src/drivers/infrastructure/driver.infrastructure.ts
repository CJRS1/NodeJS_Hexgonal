import DatabaseBootstrap from "../../bootstrap/database.bootstrap";
import { BaseInfrastructure } from "../../shared/infrastructure/base-infrastructure";
import { DriverEntity } from "../domain/models/driver.entity";
import { DriverModel } from "../domain/models/driver.model"
import { DriverRepository } from "../domain/repositories/driver.repository";

export class DriverInfrastructure extends BaseInfrastructure<DriverModel, number> implements DriverRepository {
    /* Sobreescribiendo */
    override findAll(
        where: {
            [s: string]: string | number | boolean;
        } = null,
        order: { [s: string]: string } = null
    ): Promise<DriverModel[]> {
        const dataSource = DatabaseBootstrap.dataSource;
        const repository = dataSource.getRepository(DriverEntity);
        return repository.find({ where: where || {}, order: order || {} });
    }

    override insert(driver: DriverModel): Promise<DriverModel> {
        const dataSource = DatabaseBootstrap.dataSource;
        const repository = dataSource.getRepository(DriverEntity);
        return repository.save(driver);
    }

    override async update(driver: DriverModel): Promise<DriverModel> {
        const dataSource = DatabaseBootstrap.dataSource;
        const repository = dataSource.getRepository(DriverEntity);
        const driverToUpdated = await repository.findOneBy({ id: driver.id });
        delete driver.id;
        Object.assign(driverToUpdated, driver);
        return repository.save(driverToUpdated);
    }

    override async delete(id: number): Promise<DriverModel> {
        const dataSource = DatabaseBootstrap.dataSource;
        const repository = dataSource.getRepository(DriverEntity);
        const driverToDelete = await repository.findOneBy({ id });
        driverToDelete.active = false;
        return repository.save(driverToDelete);
    }

    getReportByDriver(id: number): Promise<DriverModel[]> {
        throw new Error("Method not implemented.");

    }
}