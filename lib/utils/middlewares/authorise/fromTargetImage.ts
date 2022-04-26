import { Request, Response } from "express"
import User from "../../../db/Entities/User.Entity"
import findUserIdFromImageId from "../../../db/queries/cv/image/findUserIdFromImageId"
import MissingImageIdError from "../../../error/MissingImageIdError"

export default async function fromTargetImage(req: Request, res: Response) {
    const id: string = req.params.id
    if(!id) throw new MissingImageIdError(MissingImageIdError.defaultMessage)
    
    const user: User = await findUserIdFromImageId(id)
    if(user) return user.id
    return null
}