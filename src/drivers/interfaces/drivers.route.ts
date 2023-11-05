import { BaseRouter } from '../../shared/interfaces/base.router';
import { DriverInfrastructure } from '../infrastructure/driver.infrastructure';
import { DriverApplication } from '../application/driver.application';
import { DriverController } from './drivers.controller';

const infrastructure = new DriverInfrastructure();
const application = new DriverApplication(infrastructure);
const driverController = new DriverController(application);

export default class extends BaseRouter {

    constructor() {
        super(driverController);
    }

    mountRoutes(): void {
        
    }
}

