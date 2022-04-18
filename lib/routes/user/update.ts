import { Request, Response } from "express";
import updateUserData from "../../db/queries/user/update";

export default async function updateUser(req: Request, res: Response) {
    try{
        await updateUserData(res.locals.userData);
        return res.sendStatus(200);
    } catch(e){
        console.log(e);
        return res.sendStatus(500);
    }
}
