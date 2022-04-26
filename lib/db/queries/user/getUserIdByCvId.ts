import { AppDataSource } from "../.."
import CvOrUserNotFoundError from "../../../error/CvOrUserNotFoundError"
import MissingCvIdError from "../../../error/MissingCvIdError"
import User from "../../Entities/User.Entity"

export default async function getUserIdFromCvId(id: string): Promise<User | null> {
    if(!id) throw new MissingCvIdError(MissingCvIdError.defaultMessage)
    
    try {
        const user: User = await AppDataSource
        .manager
        .createQueryBuilder()
        .select("user.id")
        .from(User,"user")
        .leftJoin("user.cvs", "cv")
        .where("cv.id = :id", {id})
        .getOne()
        if(user) return user
    } catch(e) {
        console.error(e)
        return null
    }
    throw new CvOrUserNotFoundError(CvOrUserNotFoundError.defaultMessage)
}