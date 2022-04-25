import { Request, Response } from "express";
import Cv from "../../db/Entities/Cv.Entity";
import getAllCvData from "../../db/queries/cv/get/getAllCvData";
import MissingCvIdError from "../../error/MissingCvIdError";

export default async function getCv(req: Request, res: Response) {
    try {
        const cv: Cv = await getAllCvData(req.params.id)
        return res.status(200).json(cv)
    } catch(e) {
        if(e instanceof MissingCvIdError){
            return res.status(400).json(e.message)
        }
        console.error(e)
        return res.status(500)
    }

}