import { Router, Request, Response } from "express";
import authenticate from "../../utils/middlewares/authenticateUser";
import getAccessToken from "../../utils/middlewares/authenticateUser/getAccessToken";
import multer from "../../utils/middlewares/multer";
import authorise from "../../utils/middlewares/authenticateUser";
import prepCvData from "../../utils/middlewares/prepCvData";
import updateCv from "./update";
import createCv from "./create";

const cvRouter: Router = Router();
cvRouter.post('/', authenticate(getAccessToken), authorise, prepCvData, createCv);
cvRouter.put('/', authenticate(getAccessToken), authorise, updateCv);

cvRouter.use("*", (req: Request, res: Response) => {
    res.status(404).json(`Invalid request {${req.originalUrl}}`);
})

export default cvRouter;