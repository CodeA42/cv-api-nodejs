import { Request, Response } from "express"
import User from "../../../db/Entities/User.Entity"
import findUserIdFromWorkExperienceId from "../../../db/queries/cv/get/findUserIdFromWorkExperienceId"
import MissingWorkExperienceIdError from "../../../error/MissingWorkExperienceIdError"

export default async function fromTargetWorkExperienceEntity(req: Request, res: Response) {
    const id: string = req.params.id
    if(!id) throw new MissingWorkExperienceIdError(MissingWorkExperienceIdError.defaultMessage)

    const user: User = await findUserIdFromWorkExperienceId(id)
    if(user) return user.id
    return null    
}