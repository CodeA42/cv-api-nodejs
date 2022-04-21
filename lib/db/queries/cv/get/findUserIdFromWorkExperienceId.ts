import { AppDataSource } from "../../.."
import MssingWorkExperienceId from "../../../../error/MssingWorkExperienceId"
import WorkExperienceOrUserNotFound from "../../../../error/WorkExperienceOrUserNotFound"
import User from "../../../Entities/User.Entity"

export default async function findUserIdFromWorkExperienceId(id: string): Promise<User> {
    if(id){
        try{
            const user: User = await AppDataSource
            .manager
            .createQueryBuilder()
            .select("user.id")
            .from(User, "user")
            .leftJoin("user.cvs", "cv")
            .leftJoin("cv.workExperience","workExperience")
            .where("workExperience.id = :id", {id})
            .getOne()
            if(user) return user
            throw new WorkExperienceOrUserNotFound("Work experience or user not found")
        } catch(e) {
            console.error(e)
        }
    }
    throw new MssingWorkExperienceId("Missing work experience id")
}