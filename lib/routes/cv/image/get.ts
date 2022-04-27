import { Request, Response } from "express"
import getImageNameWithCvId from "../../../db/queries/cv/image/getImageNameWithCvId"
import ImageNotFoundError from "../../../error/ImageNotFoundError"

export default async function getImage(req: Request, res: Response) {
    try {
        const imageName: string = await getImageNameWithCvId(req.params.id)
        const imagePath: string = `${require.main.path}\\uploads\\${imageName}`
        return res.sendFile(imagePath)
    } catch (e) {
        if(e instanceof ImageNotFoundError) {
            return res.status(404).json(e.message)
        }
    }
}