import { Request, Response } from "express";
import User from "../../../db/Entities/User.Entity";
import findUserIdFromEducationId from "../../../db/queries/cv/get/findUserIdFromEducationId";
import EducationOrUserNotFound from "../../../error/EducationOrUserNotFound";
import MissingEducationId from "../../../error/MissingEducationId";

export default async function fromTargetEducationEntity(req: Request, res: Response) {
    if(req.params.id){
        try{
            const user: User = await findUserIdFromEducationId(req.params.id)
            if(user) return user.id
        } catch(e) {
            if(e instanceof EducationOrUserNotFound) {
                return res.status(404).json({name: e.name})
            }            
        }
        return undefined
    }
    throw new MissingEducationId("Missing education id");
}