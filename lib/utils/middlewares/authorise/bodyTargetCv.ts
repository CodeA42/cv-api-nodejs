import { Request, Response } from "express";
import User from "../../../db/Entities/User.Entity";
import getUserIdFromCvId from "../../../db/queries/user/getUserIdByCvId";

export default async function bodyTargetCv(req: Request, res: Response) {
    if(req.body.cvId){
        const user: User = await getUserIdFromCvId(req.body.cvId)
        if(user) return user.id
        return undefined
    }
    return undefined
}