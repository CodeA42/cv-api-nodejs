import { Request, Response } from "express";
import Cv from "../../db/Entities/Cv.Entity";

export default async function getCv(req: Request, res: Response) {
    const cv: Cv = res.locals.cv
    if(cv) {
        cv.user = undefined
        res.status(200).json(cv)
    }

    return res.status(404)
}