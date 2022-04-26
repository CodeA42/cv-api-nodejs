import { verify } from "jsonwebtoken"
import { Request, Response, NextFunction} from "express"
import { DecodedToken } from "../../../common/types"

export default function authenticate(getToken: Function){
    return (req: Request, res: Response, next: NextFunction) => {
        const token = getToken(req)
        
        verify(token, getToken.prototype.tokenSecret, async (err: Error, decoded: DecodedToken) => {
            if(err) return res.sendStatus(403)
            
            if(Math.floor(Date.now() / 1000) > decoded.exp){
                return res.sendStatus(403)
            }
            
            res.locals.user = decoded.user
            next()
        })
    }
}