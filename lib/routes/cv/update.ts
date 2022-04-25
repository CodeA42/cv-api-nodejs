import { Request, Response } from "express"
import Cv from "../../db/Entities/Cv.Entity"
import getAllCvData from "../../db/queries/cv/get/getAllCvData"
import updateCvData from "../../db/queries/cv/update"
import MissingCvIdError from "../../error/MissingCvIdError"

export default async function updateCv(req: Request, res: Response) {
    try{
        const cv: Cv = await getAllCvData(req.body.id)
        const response = await updateCvData(cv, res.locals.cvData)
        return res.status(200).json(response)
    } catch(e){
        if(e instanceof MissingCvIdError) return res.status(400).json(e.message)
        
        console.log(e)
        return res.sendStatus(500)
    }
}
