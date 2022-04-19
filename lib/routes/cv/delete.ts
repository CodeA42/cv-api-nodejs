import { Request, Response } from "express"
import deleteCv from "../../db/queries/cv/delete"

export default async function deleteUserCv(req: Request, res: Response) {
    try{
        await deleteCv(req.params.id)
        return res.sendStatus(200)
    } catch(e) {
        console.error(e)
        return res.sendStatus(500)
    }
}