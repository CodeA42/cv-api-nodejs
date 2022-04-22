import { AppDataSource } from "../../..";
import ImageNotFoundError from "../../../../error/ImageNotFoundError";
import MissingImageIdError from "../../../../error/MissingImageIdError";
import Image from "../../../Entities/Image.Entity";

export default async function getImageWithId(id: string): Promise<Image | null> {
    if(id){
        try {
            const image: Image = await AppDataSource
            .manager
            .createQueryBuilder(Image, "image")
            .select("image")
            .where("image.id = :id", { id })
            .getOne()
            if(image) return image
            throw new ImageNotFoundError(ImageNotFoundError.defaultMessage)
        } catch(e) {
            console.error(e);
            return null
        }
    }
    throw new MissingImageIdError(MissingImageIdError.defaultMessage)
}
