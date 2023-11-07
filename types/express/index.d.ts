import { Express } from "express";

/* Agrega una propiedad a una interfaz que ya existe, a la interfaz request */

declare global {
    namespace Express {
        interface Request {
            traceId: string;
        }
    }
}
