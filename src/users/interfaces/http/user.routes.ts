import express from 'express'
import { UserController } from './user.controller';
import { UserApplication } from '../../application/user.application';
import { UserInfrastructure } from '../../infrastructure/user.infrastructure';
import { BaseRouter } from '../../../shared/interfaces/base.router';

/* Se inyecta */
const infrastructure = new UserInfrastructure();
const application = new UserApplication(infrastructure);
/* Usará los métodos que están en la aplicacion */
const userController = new UserController(application);

export default class extends BaseRouter{
    
    constructor(){
        super(userController)
    }

    mountRoutes(): void {}
}



