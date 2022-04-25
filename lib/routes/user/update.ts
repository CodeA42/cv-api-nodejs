import { Request, Response } from "express"
import updateUserData from "../../db/queries/user/update"
import MissingUserIdError from "../../error/MissingUserIdError"

export default async function updateUser(req: Request, res: Response) {
    try{
        await updateUserData(res.locals.userData)
        return res.sendStatus(200)
    } catch(e){
        if(e instanceof MissingUserIdError) return res.status(400).json(e.message)

        console.log(e)
        return res.sendStatus(500)
    }
}
