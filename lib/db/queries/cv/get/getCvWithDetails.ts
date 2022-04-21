import { AppDataSource } from "../../..";
import Cv from "../../../Entities/Cv.Entity";

export default async function getCvWithDetails(id: string) {
    return await AppDataSource
    .manager
    .createQueryBuilder()
    .select("cv")
    .from(Cv, "cv")
    .leftJoinAndSelect("cv.details","details")
    .getOne()
}