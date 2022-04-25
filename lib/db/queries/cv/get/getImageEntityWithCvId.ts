import { AppDataSource } from "../../..";
import ImageNotFoundError from "../../../../error/ImageNotFoundError";
import MissingCvIdError from "../../../../error/MissingCvIdError";
import Image from "../../../Entities/Image.Entity";

export default async function getImageEntityWithCvId(id: String): Promise<Image | null> {
    if(!id) throw new MissingCvIdError(MissingCvIdError.defaultMessage)
    
    try {
        const image: Image = await AppDataSource
        .manager
        .createQueryBuilder()
        .select("image")
        .from(Image, "image")
        .leftJoin("image.userDetails", "userDetails")
        .leftJoin("userDetails.cv", "cv")
        .where("cv.id = :id", { id })
        .getOne()
        if(image) return image
        throw new ImageNotFoundError(ImageNotFoundError.defaultMessage)
    } catch(e){
        console.error(e);
        return null
    }
}