import { BaseInfrastructure } from "../../shared/infrastructure/base-infrastructure";
import { MedicEntity } from "../domain/models/medic.entity";
import { MedicModel } from "../domain/models/medic.model"
import { MedicRepository } from "../domain/repositories/medic.repository";

export class MedicInfrastructure 
extends BaseInfrastructure<MedicModel> 
implements MedicRepository {

    constructor(){
        super(MedicEntity);
    }
        getReportByMedic(id: number): Promise<MedicModel[]>{
            throw new Error("Method not implemented.");
            
        }
}