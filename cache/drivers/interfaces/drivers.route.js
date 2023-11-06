"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const base_router_1 = require("../../shared/interfaces/base.router");
const driver_infrastructure_1 = require("../infrastructure/driver.infrastructure");
const driver_application_1 = require("../application/driver.application");
const drivers_controller_1 = require("./drivers.controller");
const infrastructure = new driver_infrastructure_1.DriverInfrastructure();
const application = new driver_application_1.DriverApplication(infrastructure);
const driverController = new drivers_controller_1.DriverController(application);
class default_1 extends base_router_1.BaseRouter {
    constructor() {
        super(driverController);
    }
    mountRoutes() {
    }
}
exports.default = default_1;
//# sourceMappingURL=drivers.route.js.map