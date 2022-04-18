import { Request, Response } from "express";
import createUser from "../../db/queries/user/create";

export default async function firstTime(req: Request, res: Response) {
    try{
        await createUser(res.locals.user.id)
        
        res.sendStatus(201);
    } catch(e) {
        console.error(e);
        res.sendStatus(500);
    }

}
