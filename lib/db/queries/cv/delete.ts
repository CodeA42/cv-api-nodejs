import { AppDataSource } from "../..";
import Cv from "../../Entities/Cv.Entity";

export default async function deleteCv(id: string) {
    AppDataSource.createQueryBuilder()
    .delete()
    .from(Cv)
    .where('id = :id', {id})
    .execute()
}