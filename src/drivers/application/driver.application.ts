import { BaseApplication } from "../../shared/application/interface/base.application";
import { DriverModel } from "../domain/models/driver.model";
import { DriverRepository } from "../domain/repositories/driver.repository";
import { DriverDTO } from "./dtos/dto";

export class DriverApplication extends BaseApplication<DriverModel> {
    /* Para no usar dependencias ocultas usamos a DriverRepository */
    constructor(private repositoryDriver: DriverRepository) {
        super(repositoryDriver, new DriverDTO(), "DriverApplication");
    }

    /* Aquí va la logica */
    async getAll() {
        return await this.repositoryDriver.findAll({}, [], {});
    }

    async getReportByDriver(id: number) {
        return await this.repositoryDriver.getReportByDriver(id);
    }
}


    /*     async add(driver: DriverModel) {
            return await this.repositoryDriver.insert(driver);
        }
    
        async update(driver: DriverModel) {
            return await this.repositoryDriver.update(driver, {}, []);
        }
    
        async delete(id: number) {
            return await this.repositoryDriver.delete({ id });
        }
    
        async findOne(id: number) {
            return await this.repositoryDriver.findOne({ id }, []);
        } */