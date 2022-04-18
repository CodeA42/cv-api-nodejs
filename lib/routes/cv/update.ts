import { Request, Response } from "express";
import updateCvData from "../../db/queries/cv/update";

export default async function updateCv(req: Request, res: Response) {
    try{
        await updateCvData(res.locals.userData);
        return res.sendStatus(200);
    } catch(e){
        console.log(e);
        return res.sendStatus(500);
    }
}
