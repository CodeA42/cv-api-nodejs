import { AppDataSource } from "../../.."
import MissingPersonalSkillIdError from "../../../../error/MissingPersonalSkillIdError"
import PersonalSkills from "../../../Entities/PersonalSkills.Entity"

export default async function deletePersonalSkillEntity(id: string) {
    if(!id) throw new MissingPersonalSkillIdError()
    
    return await AppDataSource.manager.delete(PersonalSkills, { id })
}