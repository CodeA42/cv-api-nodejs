import { AppDataSource } from "../..";
import Cv from "../../Entities/Cv.Entity";
import Education from "../../Entities/Education.Entity";
import Experience from "../../Entities/Experience.Entity";
import UserDetails from "../../Entities/UserDetails.Entity";
import WorkExperience from "../../Entities/WorkExperience.Entity";

export default async function deleteCv(id: string) {
    const cvRepo = AppDataSource.getRepository(Cv)
    const cv: Cv = await cvRepo.findOne({ where: { id }})

    const queryRunner = AppDataSource.createQueryRunner()
    await queryRunner.connect()
    await queryRunner.startTransaction()

    try {
        if(cv.details?.id) await queryRunner.manager.delete(UserDetails,{where: {id: cv.details.id}})
    
        const education: Education[] = cv.education
        education.forEach(async (e: Education) => {
            await queryRunner.manager.delete(Experience, {where: {id: e.experience.id}})
        });
    
        const workExperience: WorkExperience[] = cv.workExperience
        workExperience.forEach(async (e: WorkExperience) => {
            await queryRunner.manager.delete(Experience, {where: {id: e.experience.id}})
        })
    
        await queryRunner.manager.delete(Cv, {where: {id}})
    } catch (e) {
        await queryRunner.rollbackTransaction()
    } finally {
        await queryRunner.release()
    }    
}