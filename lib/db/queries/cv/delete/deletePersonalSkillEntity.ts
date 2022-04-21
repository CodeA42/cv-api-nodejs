import { AppDataSource } from "../../.."
import PersonalSkills from "../../../Entities/PersonalSkills.Entity"

export default async function deletePersonalSkillEntity(id: string) {
    const personalSkillsRepo = AppDataSource.getRepository(PersonalSkills)
    return await personalSkillsRepo.delete({ id })
}