import { AppDataSource } from "../..";
import User from "../../Entities/User.Entity";

export default async function getUserIdFromCvId(id: string): Promise<User> {
    return await AppDataSource
    .manager
    .createQueryBuilder()
    .select("user.id")
    .from(User,"user")
    .leftJoin("user.cvs", "cv")
    .where("cv.id = :id", {id})
    .getOne()
}