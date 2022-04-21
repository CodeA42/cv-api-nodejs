import { AppDataSource } from "../../..";
import CvNotFoundError from "../../../../error/CvNotFoundError";
import Cv from "../../../Entities/Cv.Entity";
import Image from "../../../Entities/Image.Entity";
import UserDetails from "../../../Entities/UserDetails.Entity";
import getCvDetailsWithCvId from "../get/getCvDetailsWithCvId";
import getCvWithDetails from "../get/getCvWithDetails";

export default async function updateImage(cvId: string, avatar: string){
    let details: UserDetails = await getCvDetailsWithCvId(cvId)
    
    if(!details) details = new UserDetails()
    if(!details.image) details.image = new Image()
    details.image.avatar = avatar
    
    if(details.id){
        return await AppDataSource.manager.save(details)
    }
    const cv: Cv = await getCvWithDetails(cvId)
    cv.details = details
    return await AppDataSource.manager.save(cv)
}