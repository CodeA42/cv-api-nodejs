import { AppDataSource } from "../../.."
import MissingWorkExperienceIdError from "../../../../error/MissingWorkExperienceIdError"
import WorkExperience from "../../../Entities/WorkExperience.Entity"

export default async function deleteWorkExperienceEntity(id: string) {
    if(!id) throw new MissingWorkExperienceIdError()
    
    return await AppDataSource.manager.delete(WorkExperience, { id })
}