import { Request, Response } from "express"
import deleteImageEntity from "../../../db/queries/cv/image/deleteImageEntity"

export default async function deleteImage(req: Request, res: Response) {
    try{
        await deleteImageEntity(req.params.id)
        return res.sendStatus(200)
    } catch(e) {
        console.error(e)
        return res.sendStatus(500)
    }
}