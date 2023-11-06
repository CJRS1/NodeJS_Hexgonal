"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DriverInfrastructure = void 0;
const base_infrastructure_1 = require("../../shared/infrastructure/base-infrastructure");
const driver_entity_1 = require("../domain/models/driver.entity");
const database_bootstrap_1 = __importDefault(require("src/bootstrap/database.bootstrap"));
const response_dto_1 = require("src/shared/application/interface/dto/response.dto");
class DriverInfrastructure extends base_infrastructure_1.BaseInfrastructure {
    constructor() {
        super(driver_entity_1.DriverEntity);
    }
    async getAll(where = {}) {
        const dataSource = database_bootstrap_1.default.dataSource;
        const repository = dataSource.getRepository(driver_entity_1.DriverEntity);
        const data = await repository.find({ where });
        return (0, response_dto_1.ResponseDto)("", data);
    }
    getReportByDriver(id) {
        throw new Error("Method not implemented.");
    }
}
exports.DriverInfrastructure = DriverInfrastructure;
/* Sobreescribiendo */
/*     override findAll(
        where: {
            [s: string]: string | number | boolean;
        } = null,
        order: { [s: string]: string } = null
    ): Promise<DriverModel[]> {
        const dataSource = DatabaseBootstrap.dataSource;
        const repository = dataSource.getRepository(DriverEntity);
        return repository.find({ where: where || {}, order: order || {} });
    } */
// override insert(driver: DriverModel): Promise<DriverModel> {
//     const dataSource = DatabaseBootstrap.dataSource;
//     const repository = dataSource.getRepository(DriverEntity);
//     return repository.save(driver);
// }
// override async update(driver: DriverModel): Promise<DriverModel> {
//     const dataSource = DatabaseBootstrap.dataSource;
//     const repository = dataSource.getRepository(DriverEntity);
//     const driverToUpdated = await repository.findOneBy({ id: driver.id });
//     delete driver.id;
//     Object.assign(driverToUpdated, driver);
//     return repository.save(driverToUpdated);
// }
// override async delete(id: number): Promise<DriverModel> {
//     const dataSource = DatabaseBootstrap.dataSource;
//     const repository = dataSource.getRepository(DriverEntity);
//     const driverToDelete = await repository.findOneBy({ id });
//     driverToDelete.active = false;
//     return repository.save(driverToDelete);
// }
//# sourceMappingURL=driver.infrastructure.js.map