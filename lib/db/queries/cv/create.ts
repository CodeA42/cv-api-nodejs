import { AppDataSource } from "../.."
import CvNotFoundError from "../../../error/CvNotFoundError"
import Cv from "../../Entities/Cv.Entity"

export default async function createNewCv(cv: Cv): Promise<Cv | null>{
    if(!cv) throw new CvNotFoundError()
    
    return await AppDataSource.manager.save(cv)
}