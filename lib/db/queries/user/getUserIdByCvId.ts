import { AppDataSource } from "../..";
import CvOrUserNotFoundError from "../../../error/CvOrUserNotFoundError";
import MissingCvIdError from "../../../error/MissingCvIdError";
import User from "../../Entities/User.Entity";

export default async function getUserIdFromCvId(id: string): Promise<User> {
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
            throw new CvOrUserNotFoundError("Cv or user not found")
        } catch(e) {
            console.error(e);
        }
    }
    throw new MissingCvIdError("Missing cv id")
}