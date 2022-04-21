import { AppDataSource } from "../../..";
import UserDetails from "../../../Entities/UserDetails.Entity";

export default async function getCvDetailsWithCvId(id: String): Promise<UserDetails> {
    return await AppDataSource
    .manager
    .createQueryBuilder()
    .from(UserDetails, "details")
    .select("details")
    .leftJoin("details.cv", "cv")
    .leftJoinAndSelect("details.image", "image")
    .where("cv.id = :id", { id })
    .getOne()
}