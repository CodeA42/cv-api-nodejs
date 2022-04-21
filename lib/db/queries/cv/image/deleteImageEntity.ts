import { AppDataSource } from "../../..";

export default async function deleteImageEntity(id: string) {
    return await AppDataSource.manager.delete(Image, { id })
}