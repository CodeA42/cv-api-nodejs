import { Request } from "express";
import MissingUserIdError from "../../../error/MissingUserIdError";

export default function body(req: Request) {
    if(req.body.userId) {
        return req.body.userId;
    }
    throw new MissingUserIdError("Missign user id")
}