import { AppDataSource } from "../../.."
import WorkExperience from "../../../Entities/WorkExperience.Entity"

export default async function deleteWorkExperienceEntity(id: string) {
    const workExperienceRepo = AppDataSource.getRepository(WorkExperience)
    return await workExperienceRepo.delete({ id })
}