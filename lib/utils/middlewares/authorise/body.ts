import { Request } from "express";

export default function body(req: Request) {
    return req.body.userId;
}