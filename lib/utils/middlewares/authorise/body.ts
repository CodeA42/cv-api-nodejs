import { Request } from "express"
import MissingUserIdError from "../../../error/MissingUserIdError"

export default function body(req: Request) {
    if(!req.body.id) throw new MissingUserIdError()
    
    return req.body.id
}