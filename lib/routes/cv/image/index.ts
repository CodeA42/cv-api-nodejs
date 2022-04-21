import { Request, Response, Router } from "express"
import authenticate from "../../../utils/middlewares/authenticateUser"
import getAccessToken from "../../../utils/middlewares/authenticateUser/getAccessToken"
import authorise from "../../../utils/middlewares/authorise"
import fromTargetPersonalSkillEntity from "../../../utils/middlewares/authorise/fromTargetPersonalSkillEntity"
import deleteImage from "./delete"

const imageRouter: Router = Router()

imageRouter.delete('/:id', authenticate(getAccessToken), authorise(fromTargetPersonalSkillEntity), deleteImage)

imageRouter.use("*", (req: Request, res: Response) => {
    res.status(404).json(`Invalid request {${req.originalUrl}}`)
})

export default imageRouter