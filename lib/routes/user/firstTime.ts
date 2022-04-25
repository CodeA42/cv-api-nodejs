import { Request, Response } from "express"
import createUser from "../../db/queries/user/create"
import MissingUserIdError from "../../error/MissingUserIdError"

export default async function firstTime(req: Request, res: Response) {
    try{
        await createUser(res.locals.user.id)
        res.sendStatus(201)
    } catch(e) {
        if(e instanceof MissingUserIdError){
            return res.status(400).json(MissingUserIdError.defaultMessage)
        }
        console.error(e)
        res.sendStatus(500)
    }

}
