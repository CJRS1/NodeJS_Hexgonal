import { Request, Response, NextFunction } from "express";
import { IError } from "../helpers/errors.helper";
import { TokenService } from "src/users/domain/services/token.service";

export class Authentication {
    static canActivate(req: Request, res: Response, next: NextFunction) {
        const headerAuthentication = req.headers.authorization;

        if (headerAuthentication) {
            const partsHeaderAuthentication = headerAuthentication.split(" ");

            if (partsHeaderAuthentication.length === 2) {
                const accessToken = partsHeaderAuthentication[1];

                TokenService.validateAccessToken(accessToken)
                    .then((payload: any) => {
                        res.locals.roles = payload.roles;
                        next();
                    })
                    .catch((response) => {
                        const error: IError = new Error(response.message);
                        error.status = response.status;
                        next(error);
                    });
            } else {
                const error: IError = new Error("You are not authorized(Authentication 1)");
                error.status = 401;
                next(error);
            }
        } else {
            const error: IError = new Error("You are not authorized(Authentication 2)");
            error.status = 401;
            next(error);
        }
    }
}
