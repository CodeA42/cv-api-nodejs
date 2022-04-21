import { AppDataSource } from "../../..";
import ImageOrUserNotFoundError from "../../../../error/ImageOrUserNotFoundError";
import MissingImageIdError from "../../../../error/MissingImageIdError";
import User from "../../../Entities/User.Entity";

export default async function findUserIdFromImageId(id: string): Promise<User> {
    if(id) {
        try{
            const user: User = await AppDataSource
            .manager
            .createQueryBuilder()
            .select("user.id")
            .from(User, "user")
            .leftJoin("user.cvs", "cv")
            .leftJoin("cv.details","details")
            .leftJoin("details.image", "image")
            .where("image.id = :id", { id })
            .getOne()
            if(user) return user
            throw new ImageOrUserNotFoundError("Image or user not found")
        } catch(e) {
            console.error(e);
        }
    }
    throw new MissingImageIdError("Missing image id")
}