import { Router, Request, Response } from "express";
import getAccessToken from "../../utils/middlewares/authenticateUser/getAccessToken";
import firstTime from "./firstTime";
import updateUser from "./update";
import userExists from "../../utils/middlewares/userExists";
import multer from "../../utils/middlewares/multer";
import prepUserData from "../../utils/middlewares/prepUserData";
import authenticate from "../../utils/middlewares/authenticateUser";


const userRouter: Router = Router();  
userRouter.post('/first-time', authenticate(getAccessToken), userExists, firstTime);
userRouter.put('/', authenticate(getAccessToken), multer.array('avatar'), prepUserData , updateUser);

userRouter.use("*", (req: Request, res: Response) => {
    res.status(404).json(`Invalid request {${req.originalUrl}}`);
})

export default userRouter;