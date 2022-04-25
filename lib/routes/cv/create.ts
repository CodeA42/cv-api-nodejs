import { Request, Response } from "express"
import createNewCv from "../../db/queries/cv/create"
import CvNotFoundError from "../../error/CvNotFoundError"

export default async function createCv(req: Request, res: Response) {
    try{
        const cv = await createNewCv(res.locals.cvData)

        return res.status(200).json(cv.id)
    } catch(e){
        if(e instanceof CvNotFoundError) {
            return res.send(400).json(CvNotFoundError.defaultMessage)
        }
        console.error(e)
        return res.sendStatus(500)
    }
}
