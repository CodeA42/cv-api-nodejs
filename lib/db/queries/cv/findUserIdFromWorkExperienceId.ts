import { AppDataSource } from "../..";
import User from "../../Entities/User.Entity";

export default async function findUserIdFromWorkExperienceId(id: string): Promise<User> {
    if(id !== undefined){
        try{
            return await AppDataSource
            .manager
            .createQueryBuilder()
            .select("user.id")
            .from(User, "user")
            .leftJoin("user.cvs", "cv")
            .leftJoin("cv.workExperience","workExperience")
            .where("workExperience.id = :id", {id})
            .getOne()
        } catch(e) {
            console.error(e)
            return undefined
        }
    }
    return undefined
}