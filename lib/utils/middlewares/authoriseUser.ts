import { NextFunction, Request, Response } from "express";

export default async function authorise(req: Request, res: Response, next: NextFunction) {
    if(req.body.userId !== res.locals.user.id){
        if(res.locals.user.admin){
            next();
        }
        res.sendStatus(403);
    }
    next();
}