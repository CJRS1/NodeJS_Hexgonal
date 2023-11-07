"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DriverApplication = void 0;
const base_application_1 = require("../../shared/application/interface/base.application");
const dto_1 = require("./dtos/dto");
class DriverApplication extends base_application_1.BaseApplication {
    /* Para no usar dependencias ocultas usamos a DriverRepository */
    constructor(repositoryDriver) {
        super(repositoryDriver, new dto_1.DriverDTO(), "DriverApplication");
        this.repositoryDriver = repositoryDriver;
    }
    /* Aquí va la logica */
    async getAll() {
        return await this.repositoryDriver.findAll({}, [], {});
    }
    async getReportByDriver(id) {
        return await this.repositoryDriver.getReportByDriver(id);
    }
}
exports.DriverApplication = DriverApplication;
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
//# sourceMappingURL=driver.application.js.map