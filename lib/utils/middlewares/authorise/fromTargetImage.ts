import { Request, Response } from "express"
import User from "../../../db/Entities/User.Entity"
import findUserIdFromImageId from "../../../db/queries/cv/image/findUserIdFromImageId"
import ImageOrUserNotFoundError from "../../../error/ImageOrUserNotFoundError"
import MissingImageIdError from "../../../error/MissingImageIdError"

export default async function fromTargetImage(req: Request, res: Response) {
    if(!req.params.id) throw new MissingImageIdError(MissingImageIdError.defaultMessage)
    
    try{
        const user: User = await findUserIdFromImageId(req.params.id)
        if(user) return user.id
    } catch(e) {
        if(e instanceof ImageOrUserNotFoundError) {
            return res.status(404).json(ImageOrUserNotFoundError.defaultMessage)
        }
    }
    return null
}