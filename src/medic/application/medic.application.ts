import { BaseApplication } from "../../shared/application/interface/base.application";
import { MedicModel } from "../domain/models/medic.model";
import { MedicRepository } from "../domain/repositories/medic.repository";

export class MedicApplication extends BaseApplication<MedicModel>{
    /* Para no usar dependencias ocultas usamos a MedicRepository */
    constructor(private repositoryMedic : MedicRepository){
        super(repositoryMedic);
    }

    async getReportByMedic(id: number){
        return await this.repositoryMedic.getReportByMedic(id);
    }
}