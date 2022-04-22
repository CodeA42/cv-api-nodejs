import { AppDataSource } from "../..";
import CvOrUserNotFoundError from "../../../error/CvOrUserNotFoundError";
import MissingCvIdError from "../../../error/MissingCvIdError";
import User from "../../Entities/User.Entity";

export default async function getUserIdFromCvId(id: string): Promise<User | null> {
    if(id) {
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
            throw new CvOrUserNotFoundError(CvOrUserNotFoundError.defaultMessage)
        } catch(e) {
            console.error(e)
            return null
        }
    }
    throw new MissingCvIdError(MissingCvIdError.defaultMessage)
}