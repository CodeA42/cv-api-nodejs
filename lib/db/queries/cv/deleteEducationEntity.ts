import { AppDataSource } from "../.."
import Education from "../../Entities/Education.Entity"

export default async function deleteEducationEntity(id: string) {
    const educationRepo = AppDataSource.getRepository(Education)
    return await educationRepo.delete({ id })
}