import { Request, Response } from "express";
import User from "../../../db/Entities/User.Entity";
import findUserIdFromEducationId from "../../../db/queries/cv/findUserIdFromEducationId";

export default async function fromTargetEducationEntity(req: Request, res: Response) {
    if(req.params.id){
        const user: User = await findUserIdFromEducationId(req.params.id)
        console.log(user);
        
        if(user) return user.id
        return undefined
    }
    return undefined
}