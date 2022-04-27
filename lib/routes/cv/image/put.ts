import { Request, Response } from "express"
import updateImage from "../../../db/queries/cv/update/updateImage"
import ImageNotSavedError from "../../../error/ImageNotSavedError"
import MissingCvIdError from "../../../error/MissingCvIdError"

export default async function putImage(req: Request, res: Response) {
    try {
        const image: string = req.file.filename
        const cvId: string = req.body.id
        await updateImage(cvId, image)
    } catch(e) {
        if(e instanceof MissingCvIdError) return res.status(400).json()
        if(e instanceof ImageNotSavedError) return res.sendStatus(500)
        console.error(e)
        return res.sendStatus(500)
    }

    res.sendStatus(200)
}