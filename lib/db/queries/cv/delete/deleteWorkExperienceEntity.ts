import { AppDataSource } from "../../.."
import MissingWorkExperienceId from "../../../../error/MissingWorkExperienceId"
import WorkExperience from "../../../Entities/WorkExperience.Entity"

export default async function deleteWorkExperienceEntity(id: string) {
    if(id){
        return await AppDataSource.manager.delete(WorkExperience, { id })
    }
    throw new MissingWorkExperienceId(MissingWorkExperienceId.defaultMessage)
}