import { AppDataSource } from "../../.."
import Cv from "../../../Entities/Cv.Entity"
import updateEducationData from "./updateEducationData"
import updateHeaderData from "./updateHeaderData"
import updatePersonalSkills from "./updatePersonalSkills"
import updateWorkData from "./updateWorkData"

export default async function updateCvData(cv: Cv, cvData: Cv){
    const queryRunner = AppDataSource.createQueryRunner()
    await queryRunner.connect()
    await queryRunner.startTransaction()
    
    try {
        cv = await updateHeaderData(cv, cvData, queryRunner)
        cv = await updateEducationData(cv, cvData, queryRunner)
        cv = await updateWorkData(cv, cvData, queryRunner)
        cv = await updatePersonalSkills(cv, cvData, queryRunner)
        
        await queryRunner.commitTransaction()
        return cv
    } catch(e) {
        console.error(e)
        await queryRunner.rollbackTransaction()
    }finally {
        await queryRunner.release()
    }
    
}