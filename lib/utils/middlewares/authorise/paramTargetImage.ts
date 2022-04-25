import { Request, Response } from "express";
import User from "../../../db/Entities/User.Entity";
import findUserIdFromImageId from "../../../db/queries/cv/image/findUserIdFromImageId";
import ImageNotFoundError from "../../../error/ImageNotFoundError";
import ImageOrUserNotFoundError from "../../../error/ImageOrUserNotFoundError";

export default async function paramTargetImage(req: Request, res: Response) {
    if(req.params.id){
        try {
            const user: User = await findUserIdFromImageId(req.params.id)
            if(user) return user.id
        } catch (e) {
            if(e instanceof ImageOrUserNotFoundError) {
                return res.sendStatus(404).json(e.message)
            }
        }
        return null
    }
    throw new ImageNotFoundError(ImageNotFoundError.defaultMessage)
}