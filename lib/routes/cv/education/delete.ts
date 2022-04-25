import { Request, Response } from "express"
import deleteEducationEntity from "../../../db/queries/cv/delete/deleteEducationEntity"
import MissingEducationIdError from "../../../error/MissingEducationIdError"

export default async function deleteEducation(req: Request, res: Response) {
    try{
        await deleteEducationEntity(req.params.id)
        return res.sendStatus(200)
    } catch(e) {
        if(e instanceof MissingEducationIdError) {
            return res.status(400).json(MissingEducationIdError.defaultMessage)
        }
        console.error(e)
        return res.sendStatus(500)
    }
}