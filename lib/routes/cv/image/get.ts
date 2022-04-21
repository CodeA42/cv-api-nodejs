import { Request, Response } from "express";
import { Image } from "../../../common/types";
import getImageWithId from "../../../db/queries/cv/image/getImageWithId";
import ImageNotFoundError from "../../../error/ImageNotFoundError";

export default async function getImage(req: Request, res: Response) {
    try {
        const image: Image = await getImageWithId(req.params.id)
        return res.status(200).json(image.avatar)
    } catch (e) {
        if(e instanceof ImageNotFoundError) {
            return res.sendStatus(404)
        }
    }
}