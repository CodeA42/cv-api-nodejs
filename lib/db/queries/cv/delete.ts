import { AppDataSource } from "../..";
import Cv from "../../Entities/Cv.Entity";
import Education from "../../Entities/Education.Entity";
import Experience from "../../Entities/Experience.Entity";
import UserDetails from "../../Entities/UserDetails.Entity";
import WorkExperience from "../../Entities/WorkExperience.Entity";

export default async function deleteCv(id: string) {
    const cvRepo = AppDataSource.getRepository(Cv)
    const cv: Cv = await cvRepo.findOne({ where: { id }})

    const userDetailsRepo = AppDataSource.getRepository(UserDetails)
    await userDetailsRepo.delete(cv.details.id)

    const experienceRepo = AppDataSource.getRepository(Experience)
    
    const education: Education[] = cv.education
    education.forEach(async (e: Education) => {
        await experienceRepo.delete(e.experience.id)
    });

    const workExperience: WorkExperience[] = cv.workExperience
    workExperience.forEach(async (e: WorkExperience) => {
        await experienceRepo.delete(e.experience.id)
    })

    await cvRepo.delete(id)
}