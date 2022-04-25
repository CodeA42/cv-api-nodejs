import { Request, Response } from "express"
import deletePersonalSkillEntity from "../../../db/queries/cv/delete/deletePersonalSkillEntity"
import MissingPersonalSkillIdError from "../../../error/MissingPersonalSkillIdError"

export default async function deletePersonalSkill(req: Request, res: Response) {
    try{
        await deletePersonalSkillEntity(req.params.id)
        return res.sendStatus(200)
    } catch(e) {
        if(e instanceof MissingPersonalSkillIdError){
            return res.status(400).json(MissingPersonalSkillIdError.defaultMessage)
        }
        console.error(e)
        return res.sendStatus(500)
    }
}