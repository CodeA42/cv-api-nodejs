import { AppDataSource } from "../../.."
import EducationOrUserNotFound from "../../../../error/EducationOrUserNotFound"
import MissingEducationId from "../../../../error/MissingEducationId"
import User from "../../../Entities/User.Entity"

export default async function findUserIdFromEducationId(id: string): Promise<User | null> {
    if(id){
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
            throw new EducationOrUserNotFound(EducationOrUserNotFound.defaultMessage)
        } catch(e) {
            console.error(e)
            return null
        }
    }
    throw new MissingEducationId(MissingEducationId.defaultMessage)
}