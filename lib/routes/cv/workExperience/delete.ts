import { Request, Response } from "express"
import deleteWorkExperienceEntity from "../../../db/queries/cv/deleteWorkExperienceEntity"

export default async function deleteWorkExperience(req: Request, res: Response) {
    try{
        await deleteWorkExperienceEntity(req.params.id)
        return res.sendStatus(200)
    } catch(e) {
        console.error(e)
        return res.sendStatus(500)
    }
}