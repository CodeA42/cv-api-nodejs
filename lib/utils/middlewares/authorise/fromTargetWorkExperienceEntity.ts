import { Request, Response } from "express"
import User from "../../../db/Entities/User.Entity"
import findUserIdFromWorkExperienceId from "../../../db/queries/cv/get/findUserIdFromWorkExperienceId"
import MissingWorkExperienceId from "../../../error/MissingWorkExperienceIdError"
import WorkExperienceOrUserNotFoundError from "../../../error/WorkExperienceOrUserNotFoundError"

export default async function fromTargetWorkExperienceEntity(req: Request, res: Response) {
    if(!req.params.id) throw new MissingWorkExperienceId(MissingWorkExperienceId.defaultMessage)

    try {
        const user: User = await findUserIdFromWorkExperienceId(req.params.id)
        if(user) return user.id
    } catch(e) {
        if(e instanceof WorkExperienceOrUserNotFoundError){
            return res.status(404).json(e.message)
        }
    }
    return null    
}