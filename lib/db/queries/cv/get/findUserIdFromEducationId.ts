import { AppDataSource } from "../../.."
import EducationOrUserNotFoundError from "../../../../error/EducationOrUserNotFoundError"
import MissingEducationIdError from "../../../../error/MissingEducationIdError"
import User from "../../../Entities/User.Entity"

export default async function findUserIdFromEducationId(id: string): Promise<User | null> {
    if(!id) throw new MissingEducationIdError()
    
    try{
        const user: User = await AppDataSource
        .manager
        .createQueryBuilder()
        .select("user.id")
        .from(User, "user")
        .leftJoin("user.cvs", "cv")
        .leftJoin("cv.education","education")
        .where("education.id = :id", {id})
        .getOne()
        if(user) return user
    } catch(e) {
        console.error(e)
        return null
    }
    throw new EducationOrUserNotFoundError()
}