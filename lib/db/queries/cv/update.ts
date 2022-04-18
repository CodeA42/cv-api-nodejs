import { AppDataSource } from "../..";
import { CvData } from "../../../common/types";
import Cv from "../../Entities/Cv.Entity";

export default async function updateCvData(cvData: CvData): Promise<Cv>{
    const userRepo = AppDataSource.getRepository(Cv);
    const cv = await userRepo.findOneBy({id: cvData.id})

    return await userRepo.save(cv);
}