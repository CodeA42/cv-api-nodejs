import ImageNotFoundError from "../../../../error/ImageNotFoundError"
import ImageNotSavedError from "../../../../error/ImageNotSavedError"
import MissingCvIdError from "../../../../error/MissingCvIdError"
import UserDetailsNotFoundError from "../../../../error/UserDetailsNotFoundError"
import deleteFileIfExists from "../../../../utils/deleteFileIfExists"
import UserDetails from "../../../Entities/UserDetails.Entity"
import getCvDetailsWithCvId from "../get/getCvDetailsWithCvId"

export default async function deleteCvImage(id: string) {
    if(!id) throw new MissingCvIdError(MissingCvIdError.defaultMessage)

    try {
        const details: UserDetails = await getCvDetailsWithCvId(id)
        const path: string = `${require.main.path}\\uploads\\${details.image}`
        deleteFileIfExists(path)
    } catch(e) {
        if(e instanceof UserDetailsNotFoundError) {
            throw new ImageNotFoundError(ImageNotSavedError.defaultMessage)
        }
    }
    
}