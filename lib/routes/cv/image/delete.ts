import { Request, Response } from "express"
import deleteCvImage from "../../../db/queries/cv/image/deleteCvImage"
import ImageNotFoundError from "../../../error/ImageNotFoundError"

export default async function deleteImage(req: Request, res: Response) {
    try{
        await deleteCvImage(req.params.id)
        return res.sendStatus(200)
    } catch(e) {
        if(e instanceof ImageNotFoundError) return res.sendStatus(404).json(e.message)
        console.error(e)
        return res.sendStatus(500)
    }
}