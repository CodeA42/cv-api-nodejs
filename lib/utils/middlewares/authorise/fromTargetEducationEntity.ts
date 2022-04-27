import { Request } from "express"
import User from "../../../db/Entities/User.Entity"
import findUserIdFromEducationId from "../../../db/queries/cv/get/findUserIdFromEducationId"
import MissingEducationId from "../../../error/MissingEducationIdError"

export default async function fromTargetEducationEntity(req: Request) {
    const id: string = req.params.id
    if(!id) throw new MissingEducationId()
    
    const user: User = await findUserIdFromEducationId(id)
    if(user) return user.id
    return null
}