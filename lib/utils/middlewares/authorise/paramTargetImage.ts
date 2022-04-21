import { Request, Response } from "express";
import User from "../../../db/Entities/User.Entity";
import findUserIdFromImageId from "../../../db/queries/cv/image/findUserIdFromImageId";

export default async function paramTargetImage(req: Request, res: Response) {
    if(req.params.id){
        const user: User = await findUserIdFromImageId(req.params.id)
        if(user) return user.id
        return undefined
    }
    return undefined
}