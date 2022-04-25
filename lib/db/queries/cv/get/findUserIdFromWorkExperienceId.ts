import { AppDataSource } from "../../.."
import MissingWorkExperienceIdError from "../../../../error/MissingWorkExperienceIdError"
import WorkExperienceOrUserNotFoundError from "../../../../error/WorkExperienceOrUserNotFoundError"
import User from "../../../Entities/User.Entity"

export default async function findUserIdFromWorkExperienceId(id: string): Promise<User | null> {
    if(!id) throw new MissingWorkExperienceIdError(MissingWorkExperienceIdError.defaultMessage)
    
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
        throw new WorkExperienceOrUserNotFoundError(WorkExperienceOrUserNotFoundError.defaultMessage)
    } catch(e) {
        console.error(e)
        return null
    }
}