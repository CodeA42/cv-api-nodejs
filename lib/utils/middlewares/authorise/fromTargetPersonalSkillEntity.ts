import { Request, Response } from "express"
import User from "../../../db/Entities/User.Entity"
import findUserIdFromImageId from "../../../db/queries/cv/image/findUserIdFromImageId"
import MissingPersonalSkillIdError from "../../../error/MissingPersonalSkillIdError"

export default async function fromTargetPersonalSkillEntity(req: Request, res: Response) {
    const id: string = req.params.id
    if(!id) throw new MissingPersonalSkillIdError(MissingPersonalSkillIdError.defaultMessage)
    
    const user: User = await findUserIdFromImageId(id)
    if(user) return user.id
    return null
}