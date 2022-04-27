import { Request } from "express"
import User from "../../../db/Entities/User.Entity"
import findUserIdFromWorkExperienceId from "../../../db/queries/cv/get/findUserIdFromWorkExperienceId"
import MissingWorkExperienceIdError from "../../../error/MissingWorkExperienceIdError"

export default async function fromTargetWorkExperienceEntity(req: Request) {
    const id: string = req.params.id
    if(!id) throw new MissingWorkExperienceIdError()

    const user: User = await findUserIdFromWorkExperienceId(id)
    if(user) return user.id
    return null    
}