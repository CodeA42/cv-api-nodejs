import { AppDataSource } from "../../.."
import EducationOrUserNotFound from "../../../../error/EducationOrUserNotFound"
import MissingEducationId from "../../../../error/MissingEducationId"
import User from "../../../Entities/User.Entity"

export default async function findUserIdFromEducationId(id: string): Promise<User> {
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
            throw new EducationOrUserNotFound("Education or user not found")
        } catch(e) {
            console.error(e)
        }
    }
    throw new MissingEducationId("Missing education id")
}