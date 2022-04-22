import { AppDataSource } from "../../.."
import MissingPersonalSkillIdError from "../../../../error/MissingPersonalSkillIdError"
import PersonalSkillOrUserNotFoundError from "../../../../error/PersonalSkillOrUserNotFoundError"
import User from "../../../Entities/User.Entity"

export default async function findUserIdFromPersonalSkillId(id: string): Promise<User | null> {
    if(id){
        try{
            const user = await AppDataSource
            .manager
            .createQueryBuilder()
            .select("user.id")
            .from(User, "user")
            .leftJoin("user.cvs", "cv")
            .leftJoin("cv.personalSkills","personalSkills")
            .where("personalSkills.id = :id", {id})
            .getOne()
            if(user) return user
            throw new PersonalSkillOrUserNotFoundError(PersonalSkillOrUserNotFoundError.defaultMessage)
        } catch(e) {
            console.error(e)
            return null
        }
    }
    throw new MissingPersonalSkillIdError(MissingPersonalSkillIdError.defaultMessage)
}