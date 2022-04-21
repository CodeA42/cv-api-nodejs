import { AppDataSource } from "../../..";
import Image from "../../../Entities/Image.Entity";

export default async function deleteImageEntity(id: string) {
    return await AppDataSource.manager.delete(Image, { id })
}