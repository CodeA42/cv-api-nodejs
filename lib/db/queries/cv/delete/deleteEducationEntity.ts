import { AppDataSource } from "../../.."
import MissingEducationIdError from "../../../../error/MissingEducationIdError"
import Education from "../../../Entities/Education.Entity"

export default async function deleteEducationEntity(id: string) {
    if(!id) throw new MissingEducationIdError()
    
    return await AppDataSource.manager.delete(Education, { id })
    
}