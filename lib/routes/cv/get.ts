import { Request, Response } from "express";

export default function getCv(req: Request, res: Response) {
    res.sendStatus(200);
}