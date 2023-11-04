"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DriverApplication = void 0;
class DriverApplication {
    /* Para no usar dependencias ocultas usamos a DriverRepository */
    constructor(repositoryDriver) {
        this.repositoryDriver = repositoryDriver;
    }
    async add(driver) {
        return await this.repositoryDriver.insert(driver);
    }
    async update(driver) {
        return await this.repositoryDriver.update(driver);
    }
    async delete(id) {
        return await this.repositoryDriver.delete(id);
    }
    async findById(id) {
        return await this.repositoryDriver.findById(id);
    }
    async findAll() {
        return await this.repositoryDriver.findAll();
    }
    async getReportByDriver(id) {
        return await this.repositoryDriver.getReportByDriver(id);
    }
}
exports.DriverApplication = DriverApplication;
//# sourceMappingURL=driver.application.js.map