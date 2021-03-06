import { AppDataSource } from "../../.."
import CvNotFoundError from "../../../../error/CvNotFoundError"
import MissingCvIdError from "../../../../error/MissingCvIdError"
import Cv from "../../../Entities/Cv.Entity"

export default async function getAllCvData(id: string): Promise<Cv | null> {
    if(!id) throw new MissingCvIdError()
    
    try {
        const cv: Cv = await AppDataSource.manager.findOne(Cv, {where: {id}})
        if(cv) return cv
    } catch(e) {
        console.error(e)
        return null
    }
    throw new CvNotFoundError()
}