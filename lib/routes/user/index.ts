import { Router, Request, Response } from "express"
import firstTime from "./firstTime"
import updateUser from "./update"
import userExists from "../../utils/middlewares/userExists"
import multer from "../../utils/middlewares/multer"
import prepUserData from "../../utils/middlewares/prepUserData"

const userRouter: Router = Router();  
userRouter.post('/first-time', userExists, firstTime);
userRouter.put('/', multer.array('avatar'), prepUserData , updateUser);

userRouter.use("*", (req: Request, res: Response) => {
    res.status(404).json(`Invalid request {${req.originalUrl}}`);
})

export default userRouter;