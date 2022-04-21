import { AppDataSource } from "../../..";
import Image from "../../../Entities/Image.Entity";

export default async function getImageEntityWithCvId(id: String): Promise<Image> {
    return await AppDataSource
    .manager
    .createQueryBuilder()
    .select("image")
    .from(Image, "image")
    .leftJoin("image.userDetails", "userDetails")
    .leftJoin("userDetails.cv", "cv")
    .where("cv.id = :id", { id })
    .getOne()
}