import { Request, Response } from "express";
import Cv from "../../../db/Entities/Cv.Entity";
import getCvById from "../../../db/queries/cv/get";

export default function bodyTargetCv(attachCv: boolean = false) {
    return async (req: Request, res: Response): Promise<string | undefined> => {
        if(req.body.id){
            const cv: Cv = await getCvById(req.body.id)
            if(cv){
                if(attachCv){
                    res.locals.cv = cv;
                }
                const owner = cv.user.id
                return owner
            }
            return undefined
        }
        return undefined
    }
}