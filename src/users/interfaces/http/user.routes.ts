import express from 'express'
import { UserController } from './user.controller';
import { UserApplication } from '../../application/user.application';
import { UserInfrastructure } from '../../infrastructure/user.infrastructure';
import { BaseRouter } from '../../../shared/interfaces/base.router';
import { RoleInfrastructure } from 'src/roles/domain/infrastructure/role.infrastructure';

/* Se inyecta */
const infrastructureUser = new UserInfrastructure();
const infrastructureRole = new RoleInfrastructure();
const application = new UserApplication(infrastructureUser, infrastructureRole);
/* Usará los métodos que están en la aplicacion */
const userController = new UserController(application);

export default class extends BaseRouter{
    
    constructor(){
        super(userController, "user")
    }

    mountRoutes(): void {}
}



