import { AppDataSource } from "../../..";
import User from "../../../Entities/User.Entity";

export default async function findUserIdFromImageId(id: string): Promise<User> {
    return await AppDataSource
    .manager
    .createQueryBuilder()
    .select("user.id")
    .from(User, "user")
    .leftJoin("user.cvs", "cv")
    .leftJoin("cv.details","details")
    .leftJoin("details.image", "image")
    .where("image.id = :id", { id })
    .getOne()
}