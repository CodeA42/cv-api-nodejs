import { Request, Response } from "express";
import Cv from "../../../db/Entities/Cv.Entity";
import getCvById from "../../../db/queries/cv/get";

export default function fromTargetCv(attachCv: boolean = false) {
    return async (req: Request, res: Response): Promise<string | undefined> => {
        if(req.params.id){
            const cv: Cv = await getCvById(req.params.id)
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