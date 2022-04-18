import { NextFunction, Request, Response } from "express";
import getUserById from "../../db/queries/user/get";

export default async function userExists(req: Request, res: Response, next: NextFunction) {
    const dbRes = await getUserById(res.locals.user.id);
    
    if(dbRes.length !== 1){
        next();
    }
    res.sendStatus(409);
}