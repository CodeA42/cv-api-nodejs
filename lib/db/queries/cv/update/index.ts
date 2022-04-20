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
        await updateHeaderData(cv, cvData, queryRunner)
        await updateEducationData(cv, cvData, queryRunner)
        await updateWorkData(cv, cvData, queryRunner)
        await updatePersonalSkills(cv, cvData, queryRunner)

        const result = queryRunner.manager.findOneBy(Cv, {id: cv.id})
        await queryRunner.commitTransaction()
        return result
    } catch(e) {
        console.error(e);
        await queryRunner.rollbackTransaction()
    }finally {
        await queryRunner.release()
    }
    
}