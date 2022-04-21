import { Request, Response } from "express"
import User from "../../../db/Entities/User.Entity"
import findUserIdFromPersonalSkillId from "../../../db/queries/cv/findUserIdFromPersonalSkillId"

export default async function fromTargetPersonalSkillEntity(req: Request, res: Response) {
    if(req.params.id){
        const user: User = await findUserIdFromPersonalSkillId(req.params.id)
        if(user) return user.id
        return undefined
    }
    return undefined
}