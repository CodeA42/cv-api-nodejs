import { AppDataSource } from "../../..";
import MissingImageIdError from "../../../../error/MissingImageIdError";
import Image from "../../../Entities/Image.Entity";

export default async function deleteImageEntity(id: string) {
    if(!id) throw new MissingImageIdError(MissingImageIdError.defaultMessage)
    
    return await AppDataSource.manager.delete(Image, { id })
}