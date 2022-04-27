import { Request } from "express"
import User from "../../../db/Entities/User.Entity"
import getUserIdFromCvId from "../../../db/queries/user/getUserIdByCvId"
import MissingCvIdError from "../../../error/MissingCvIdError"

export default async function bodyTargetCv(req: Request) {
    const id: string = req.body.id
    if(!id) throw new MissingCvIdError(MissingCvIdError.defaultMessage)
    
    const user: User = await getUserIdFromCvId(id)
    if(user) return user.id
    return null
}