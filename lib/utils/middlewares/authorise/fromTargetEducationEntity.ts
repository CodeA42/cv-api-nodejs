import { Request, Response } from "express"
import User from "../../../db/Entities/User.Entity"
import findUserIdFromEducationId from "../../../db/queries/cv/get/findUserIdFromEducationId"
import EducationOrUserNotFoundError from "../../../error/EducationOrUserNotFoundError"
import MissingEducationId from "../../../error/MissingEducationIdError"

export default async function fromTargetEducationEntity(req: Request, res: Response) {
    if(!req.params.id) throw new MissingEducationId(MissingEducationId.defaultMessage)
    
    try{
        const user: User = await findUserIdFromEducationId(req.params.id)
        if(user) return user.id
    } catch(e) {
        if(e instanceof EducationOrUserNotFoundError) {
            return res.status(404).json(e.message)
        }
    }
    return null
}