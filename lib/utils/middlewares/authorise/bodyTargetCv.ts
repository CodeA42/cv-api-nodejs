import { Request, Response } from "express";
import User from "../../../db/Entities/User.Entity";
import getUserIdFromCvId from "../../../db/queries/user/getUserIdByCvId";

export default async function bodyTargetCv(req: Request, res: Response) {
    if(req.body.id){
        const user: User = await getUserIdFromCvId(req.params.id)
        if(user) return user.id
        return undefined
    }
}