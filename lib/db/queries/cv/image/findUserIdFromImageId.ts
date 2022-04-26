import { AppDataSource } from "../../..";
import ImageOrUserNotFoundError from "../../../../error/ImageOrUserNotFoundError";
import MissingImageIdError from "../../../../error/MissingImageIdError";
import User from "../../../Entities/User.Entity";

export default async function findUserIdFromImageId(id: string): Promise<User | null> {
    if(!id) throw new MissingImageIdError(MissingImageIdError.defaultMessage)
    
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
    } catch(e) {
        console.error(e);
        return null
    }
    throw new ImageOrUserNotFoundError(ImageOrUserNotFoundError.defaultMessage)
}