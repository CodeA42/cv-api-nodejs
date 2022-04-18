import { Router, Request, Response } from "express";
import cvRouter from "./cv";
import userRouter from "./user";

const router: Router = Router();  
router.use('/user', userRouter);
router.use('/cv', cvRouter);

router.use("*", (req: Request, res: Response) => {
    res.status(404).json(`Invalid request {${req.originalUrl}}`);
})

export default router;