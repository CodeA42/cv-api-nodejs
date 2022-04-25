import { AppDataSource } from "../../.."
import MissingCvIdError from "../../../../error/MissingCvIdError"
import UserDetailsNotFoundError from "../../../../error/UserDetailsNotFoundError"
import UserDetails from "../../../Entities/UserDetails.Entity"

export default async function getCvDetailsWithCvId(id: String): Promise<UserDetails | null> {
    if(!id) throw new MissingCvIdError(MissingCvIdError.defaultMessage)

    try{
        const userDetails: UserDetails = await AppDataSource
        .manager
        .createQueryBuilder()
        .from(UserDetails, "details")
        .select("details")
        .leftJoin("details.cv", "cv")
        .leftJoinAndSelect("details.image", "image")
        .where("cv.id = :id", { id })
        .getOne()
        if(userDetails) return userDetails
        throw new UserDetailsNotFoundError(UserDetailsNotFoundError.defaultMessage)
    } catch(e) {
        console.error(e)
        return null
    }
}