import { Request, Response } from "express"
import User from "../../../db/Entities/User.Entity"
import findUserFromWorkExperienceId from "../../../db/queries/cv/findUserFromworkExperienceId"

export default async function fromTargetWorkExperienceEntity(req: Request, res: Response) {
    if(req.params.id){
        const user: User = await findUserFromWorkExperienceId(req.params.id)
        if(user) return user.id
        return undefined
    }
    return undefined
}