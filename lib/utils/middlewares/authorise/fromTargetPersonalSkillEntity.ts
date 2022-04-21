import { Request, Response } from "express"
import User from "../../../db/Entities/User.Entity"
import findUserIdFromWorkExperienceId from "../../../db/queries/cv/findUserIdFromWorkExperienceId"

export default async function fromTargetPersonalSkillEntity(req: Request, res: Response) {
    if(req.params.id){
        const user: User = await findUserIdFromWorkExperienceId(req.params.id)
        if(user) return user.id
        return undefined
    }
    return undefined
}