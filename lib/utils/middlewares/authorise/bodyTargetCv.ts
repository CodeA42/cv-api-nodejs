import { Request, Response } from "express";
import User from "../../../db/Entities/User.Entity";
import getUserIdFromCvId from "../../../db/queries/user/getUserIdByCvId";
import CvOrUserNotFoundError from "../../../error/CvOrUserNotFoundError";
import MissingCvIdError from "../../../error/MissingCvIdError";

export default async function bodyTargetCv(req: Request, res: Response) {
    if(req.body.cvId){
        try {
            const user: User = await getUserIdFromCvId(req.body.cvId)
            if(user) return user.id
        } catch(e) {
            if(e instanceof CvOrUserNotFoundError) {
                return res.sendStatus(404).json({name: e.name})
            }
        }
        return undefined
    }
    throw new MissingCvIdError(MissingCvIdError.defaultMessage)
}