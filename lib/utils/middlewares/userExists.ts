import { NextFunction, Request, Response } from "express"
import User from "../../db/Entities/User.Entity"
import getUserById from "../../db/queries/user/get"
import MissingUserIdError from "../../error/MissingUserIdError"
import UserNotFoundError from "../../error/UserNotFoundError"

export default async function userExists(req: Request, res: Response, next: NextFunction) {
    try {
        const user: User = await getUserById(res.locals.user.id)
        if(user) return res.sendStatus(409)
    } catch(e) {
        if(e instanceof MissingUserIdError) return res.status(400).json(e.message)
        if(e instanceof UserNotFoundError) return next()
        console.error(e)
        return res.sendStatus(500)
    }
}