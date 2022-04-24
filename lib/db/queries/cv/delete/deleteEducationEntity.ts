import { AppDataSource } from "../../.."
import MissingEducationId from "../../../../error/MissingEducationId"
import Education from "../../../Entities/Education.Entity"

export default async function deleteEducationEntity(id: string) {
    if(id){
        return await AppDataSource.manager.delete(Education, { id })
    }
    throw new MissingEducationId(MissingEducationId.defaultMessage)
}