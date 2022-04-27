import ImageNotFoundError from "../../../../error/ImageNotFoundError"
import MissingCvIdError from "../../../../error/MissingCvIdError"
import UserDetailsNotFoundError from "../../../../error/UserDetailsNotFoundError"
import UserDetails from "../../../Entities/UserDetails.Entity"
import getCvDetailsWithCvId from "../get/getCvDetailsWithCvId"

export default async function getImageNameWithCvId(cvId: string): Promise<string | null> {
    if(!cvId) throw new MissingCvIdError(MissingCvIdError.defaultMessage)
    
    try {
        const details: UserDetails = await getCvDetailsWithCvId(cvId)
        if(details.image) return details.image
    } catch(e) {
        if(e instanceof UserDetailsNotFoundError) {
            throw new ImageNotFoundError(ImageNotFoundError.defaultMessage)
        }
        console.error(e);
        return null
    }
    throw new ImageNotFoundError(ImageNotFoundError.defaultMessage)
}
