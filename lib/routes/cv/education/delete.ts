import { Request, Response } from "express"
import deleteEducationEntity from "../../../db/queries/cv/delete/deleteEducationEntity"

export default async function deleteEducation(req: Request, res: Response) {
    try{
        await deleteEducationEntity(req.params.id)
        return res.sendStatus(200)
    } catch(e) {
        console.error(e)
        return res.sendStatus(500)
    }
}