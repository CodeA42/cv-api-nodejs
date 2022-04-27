import { AppDataSource } from "../../.."
import ImageNotSavedError from "../../../../error/ImageNotSavedError"
import MissingCvIdError from "../../../../error/MissingCvIdError"
import MissingImageError from "../../../../error/MissingImageError"
import UserDetailsNotFoundError from "../../../../error/UserDetailsNotFoundError"
import Cv from "../../../Entities/Cv.Entity"
import UserDetails from "../../../Entities/UserDetails.Entity"
import getCvDetailsWithCvId from "../get/getCvDetailsWithCvId"
import getCvWithDetails from "../get/getCvWithDetails"
import deleteFileIfExists from "../../../../utils/deleteFileIfExists"

export default async function updateImage(cvId: string, image: string){
    if(!cvId) throw new MissingCvIdError(MissingCvIdError.defaultMessage)
    if(!image) throw new MissingImageError(MissingImageError.defaultMessage)


    let details: UserDetails

    try {
        details = await getCvDetailsWithCvId(cvId)
        if(!details) details = new UserDetails()
    } catch(e) {
        if(e instanceof UserDetailsNotFoundError) details = new UserDetails()
        else {
            console.error(e)
            throw new ImageNotSavedError(ImageNotSavedError.defaultMessage)
        }
    }

    //If there is an old image deletes it
    const path: string = `${require.main.path}\\uploads\\${details.image}`
    deleteFileIfExists(path)

    details.image = image
    
    if(details.id) return await AppDataSource.manager.save(details)
    const cv: Cv = await getCvWithDetails(cvId)
    cv.details = details
    return await AppDataSource.manager.save(cv)
}