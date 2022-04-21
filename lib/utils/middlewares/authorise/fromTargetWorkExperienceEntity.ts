import { Request, Response } from "express"
import User from "../../../db/Entities/User.Entity"
import findUserIdFromWorkExperienceId from "../../../db/queries/cv/get/findUserIdFromWorkExperienceId"
import MissingWorkExperienceEntity from "../../../error/MissingWorkExperienceEntity"
import WorkExperienceOrUserNotFound from "../../../error/WorkExperienceOrUserNotFound"

export default async function fromTargetWorkExperienceEntity(req: Request, res: Response) {
    if(req.params.id){
        try {
            const user: User = await findUserIdFromWorkExperienceId(req.params.id)
            if(user) return user.id
        } catch(e) {
            if(e instanceof WorkExperienceOrUserNotFound){
                return res.status(404).json({name: e.name})
            }
        }
        return undefined
    }
    throw new MissingWorkExperienceEntity("Missing work experience entity")
}