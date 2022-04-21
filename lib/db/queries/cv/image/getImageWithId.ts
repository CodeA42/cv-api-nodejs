import { AppDataSource } from "../../..";
import ImageNotFoundError from "../../../../error/ImageNotFoundError";
import Image from "../../../Entities/Image.Entity";

export default async function getImageWithId(id: string): Promise<Image> {
    const image: Image = await AppDataSource.manager
    .createQueryBuilder(Image, "image").select("image").where("image.id = :id", { id }).getOne()
    if(image) {
        return image
    }
    throw new ImageNotFoundError("Image not found")
}
