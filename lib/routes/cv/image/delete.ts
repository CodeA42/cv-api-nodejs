import { Request, Response } from "express"
import deleteImageEntity from "../../../db/queries/cv/image/deleteImageEntity"
import ImageNotFoundError from "../../../error/ImageNotFoundError"

export default async function deleteImage(req: Request, res: Response) {
    try{
        await deleteImageEntity(req.params.id)
        return res.sendStatus(200)
    } catch(e) {
        if(e instanceof ImageNotFoundError) {
            return res.sendStatus(404)
        }
        console.error(e)
        return res.sendStatus(500)
    }
}