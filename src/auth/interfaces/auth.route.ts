import express from "express";
import { HandlerErrors } from "../../shared/helpers/errors.helper";
import { AuthApplication } from "../application/auth.application";
import { AuthRepository } from "../domain/repositories/auth.repository";
import { AuthController } from "./auth.controller";
import { AuthInfrastructure } from "../infrastructure/auth.infrastructure";

export default class AuthRouter {
  expressRouter: express.Router;
  controller: AuthController;

  constructor() {
    const infrastructure: AuthRepository = new AuthInfrastructure();
    const application = new AuthApplication(infrastructure);
    this.controller = new AuthController(application);
    this.expressRouter = express.Router();
    this.mountRoutes();
    return this;
  }

  mountRoutes(): void {
    this.expressRouter.post(
      "/login",
      HandlerErrors.catchError(this.controller.login)
    );

    this.expressRouter.get(
      "/get-new-access-token/:refreshToken",
      HandlerErrors.catchError(this.controller.getNewAccessToken)
    );
  }
}
