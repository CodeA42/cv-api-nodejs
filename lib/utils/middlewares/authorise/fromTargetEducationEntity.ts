import { Request, Response } from "express"
import User from "../../../db/Entities/User.Entity"
import findUserIdFromEducationId from "../../../db/queries/cv/get/findUserIdFromEducationId"
import MissingEducationId from "../../../error/MissingEducationIdError"

export default async function fromTargetEducationEntity(req: Request, res: Response) {
    const id: string = req.params.id
    if(!id) throw new MissingEducationId(MissingEducationId.defaultMessage)
    
    const user: User = await findUserIdFromEducationId(id)
    if(user) return user.id
    return null
}