import { Request, Response } from "express"
import createNewCv from "../../db/queries/cv/create"

export default async function createCv(req: Request, res: Response) {
    try{
        const cv = await createNewCv(res.locals.cvData)

        return res.status(200).json(cv.id)
    } catch(e){
        console.error(e)
        return res.sendStatus(500)
    }
}
