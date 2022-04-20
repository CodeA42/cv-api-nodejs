import { Request, Response } from "express";
import Cv from "../../db/Entities/Cv.Entity";
import getAllCvData from "../../db/queries/cv/get/getAllCvData";

export default async function getCv(req: Request, res: Response) {
    const cv: Cv = await getAllCvData(req.params.id)
    if(cv) {
        res.status(200).json(cv)
    }

    return res.status(404)
}