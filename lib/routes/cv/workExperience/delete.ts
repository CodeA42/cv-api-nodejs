import { Request, Response } from "express"
import deleteWorkExperienceEntity from "../../../db/queries/cv/delete/deleteWorkExperienceEntity"
import MissingWorkExperienceIdError from "../../../error/MissingWorkExperienceIdError"

export default async function deleteWorkExperience(req: Request, res: Response) {
    try{
        await deleteWorkExperienceEntity(req.params.id)
        return res.sendStatus(200)
    } catch(e) {
        if(e instanceof MissingWorkExperienceIdError){
            return res.status(400).json(MissingWorkExperienceIdError.defaultMessage)
        }
        console.error(e)
        return res.sendStatus(500)
    }
}