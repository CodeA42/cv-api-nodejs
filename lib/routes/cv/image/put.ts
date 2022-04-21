import { Request, Response } from "express";
import updateImage from "../../../db/queries/cv/update/updateImage";

export default async function putImage(req: Request, res: Response) {
    try {
        await updateImage(req.body.cvId, req.file.buffer.toString("base64"))
    } catch(e) {
        console.error(e);
        res.sendStatus(500)
    }

    res.sendStatus(200);
}