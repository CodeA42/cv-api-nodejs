import { Request } from "express"
import User from "../../../db/Entities/User.Entity"
import findUserIdFromPersonalSkillId from "../../../db/queries/cv/get/findUserIdFromPersonalSkillId"
import MissingPersonalSkillIdError from "../../../error/MissingPersonalSkillIdError"

export default async function fromTargetPersonalSkillEntity(req: Request) {
    const id: string = req.params.id
    if(!id) throw new MissingPersonalSkillIdError(MissingPersonalSkillIdError.defaultMessage)
    
    const user: User = await findUserIdFromPersonalSkillId(id)
    if(user) return user.id
    return null
}