import { AppDataSource } from "../../.."
import MissingCvIdError from "../../../../error/MissingCvIdError"
import Cv from "../../../Entities/Cv.Entity"
import Education from "../../../Entities/Education.Entity"
import Experience from "../../../Entities/Experience.Entity"
import UserDetails from "../../../Entities/UserDetails.Entity"
import WorkExperience from "../../../Entities/WorkExperience.Entity"

export default async function deleteCv(id: string) {
    if(!id) throw new MissingCvIdError(MissingCvIdError.defaultMessage)
    
    const cvRepo = AppDataSource.getRepository(Cv)
    const cv: Cv = await cvRepo.findOne({ where: { id }})

    const queryRunner = AppDataSource.createQueryRunner()
    await queryRunner.connect()
    await queryRunner.startTransaction("SERIALIZABLE")
    
    try {
        if(cv.details?.id) await queryRunner.manager.delete(UserDetails, { id: cv.details.id })
    
        const education: Education[] = cv.education
        education.forEach(async (e: Education) => {
            await queryRunner.manager.delete(Experience, { id: e.experience.id })
        });
    
        const workExperience: WorkExperience[] = cv.workExperience
        workExperience.forEach(async (e: WorkExperience) => {
            await queryRunner.manager.delete(Experience, { id: e.experience.id })
        })
        
        await queryRunner.manager.createQueryBuilder().delete().from(Cv).where('id = :id', {id: cv.id}).execute()
        
        await queryRunner.commitTransaction()
    } catch (e) {
        await queryRunner.rollbackTransaction()
        throw e
    } finally {
        await queryRunner.release()
    }    
}