import { Request, Response } from "express"
import deleteCv from "../../db/queries/cv/delete/deleteCv"
import MissingCvIdError from "../../error/MissingCvIdError"

export default async function deleteUserCv(req: Request, res: Response) {
    try{
        await deleteCv(req.params.id)
        return res.sendStatus(200)
    } catch(e) {
        if(e instanceof MissingCvIdError){
            return res.status(400).json(MissingCvIdError.defaultMessage)
        }
        console.error(e)
        return res.sendStatus(500)
    }
}