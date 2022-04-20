import { Request, Response } from "express";
import User from "../../../db/Entities/User.Entity";
import getUserIdFromCvId from "../../../db/queries/user/getUserIdByCvId";

export default async function fromTargetCv(req: Request, res: Response){
    if(req.params.id){
        const user: User = await getUserIdFromCvId(req.params.id)
        if(user) return user.id
        return undefined
    }
}