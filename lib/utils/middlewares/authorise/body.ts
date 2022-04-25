import { Request } from "express"
import MissingUserIdError from "../../../error/MissingUserIdError"

export default function body(req: Request) {
    if(!req.body.userId) throw new MissingUserIdError(MissingUserIdError.defaultMessage)
    
    return req.body.userId
}