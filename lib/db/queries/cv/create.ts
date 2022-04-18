import { AppDataSource } from "../..";
import Cv from "../../Entities/Cv.Entity";

export default async function createNewCv(cv: Cv): Promise<Cv>{
    const cvRepo = AppDataSource.getRepository(Cv);
    return await cvRepo.save(cv);
}