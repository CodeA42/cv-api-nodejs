import { AppDataSource } from "../../.."
import MissingWorkExperienceId from "../../../../error/MissingWorkExperienceId"
import WorkExperienceOrUserNotFound from "../../../../error/WorkExperienceOrUserNotFound"
import User from "../../../Entities/User.Entity"

export default async function findUserIdFromWorkExperienceId(id: string): Promise<User | null> {
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
            throw new WorkExperienceOrUserNotFound(WorkExperienceOrUserNotFound.defaultMessage)
        } catch(e) {
            console.error(e)
            return null
        }
    }
    throw new MissingWorkExperienceId(MissingWorkExperienceId.defaultMessage)
}