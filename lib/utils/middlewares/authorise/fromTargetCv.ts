import { Request, Response } from "express"
import User from "../../../db/Entities/User.Entity"
import getUserIdFromCvId from "../../../db/queries/user/getUserIdByCvId"
import CvOrUserNotFoundError from "../../../error/CvOrUserNotFoundError"
import MissingCvIdError from "../../../error/MissingCvIdError"

export default async function fromTargetCv(req: Request, res: Response){
    if(!req.params.id) throw new MissingCvIdError(MissingCvIdError.defaultMessage)
    
    try {
        const user: User = await getUserIdFromCvId(req.params.id)
        if(user) return user.id
    } catch(e) {
        if(e instanceof CvOrUserNotFoundError) {
            return res.status(404).json(e.message)
        }
    }
    return null
}
