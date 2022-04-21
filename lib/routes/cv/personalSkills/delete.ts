import { Request, Response } from "express"
import deletePersonalSkillEntity from "../../../db/queries/cv/deletePersonalSkillEntity"

export default async function deletePersonalSkill(req: Request, res: Response) {
    try{
        await deletePersonalSkillEntity(req.params.id)
        return res.sendStatus(200)
    } catch(e) {
        console.error(e)
        return res.sendStatus(500)
    }
}