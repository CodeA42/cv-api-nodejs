import { NextFunction, Request, Response } from "express";

// type return_type = ReturnType<(req: Request, res: Response, next: NextFunction) => Promise<void>>

export default function authorise(getTarget: Function){
    return async (req: Request, res: Response, next: NextFunction) => {
        const target: string = await getTarget(req, res)
        
        if(!target) {
            return res.status(401).json('user not found')
        }

        if(target !== res.locals.user.id){
            if(res.locals.user.admin){
                next()
                return
            } else return res.sendStatus(403)
        }
        
        next()
    }
}