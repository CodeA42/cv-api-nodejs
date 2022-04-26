import { NextFunction, Request, Response } from "express"
import getUserById from "../../db/queries/user/get"
import MissingUserIdError from "../../error/MissingUserIdError"

export default async function userExists(req: Request, res: Response, next: NextFunction) {
    try {
        await getUserById(res.locals.user.id)
        next()
    } catch(e) {
        if(e instanceof MissingUserIdError) return res.status(400).json(e.message)
    }
    res.sendStatus(409)
}