import { AppDataSource } from "../../.."
import CvNotFoundError from "../../../../error/CvNotFoundError"
import MissingCvIdError from "../../../../error/MissingCvIdError"
import Cv from "../../../Entities/Cv.Entity"

export default async function getCvWithDetails(id: string): Promise<Cv | null> {
    if(!id) throw new MissingCvIdError(MissingCvIdError.defaultMessage)
    
    try{
        const cv: Cv = await AppDataSource
        .manager
        .createQueryBuilder()
        .select("cv")
        .from(Cv, "cv")
        .leftJoinAndSelect("cv.details","details")
        .getOne()
        if(cv) return cv
    } catch(e) {
        console.error(e);
        return null
    }
    throw new CvNotFoundError(CvNotFoundError.defaultMessage) 
}