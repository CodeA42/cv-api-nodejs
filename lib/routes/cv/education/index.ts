import { Request, Response, Router } from "express"
import authenticate from "../../../utils/middlewares/authenticateUser"
import getAccessToken from "../../../utils/middlewares/authenticateUser/getAccessToken"
import authorise from "../../../utils/middlewares/authorise"
import fromTargetEducationEntity from "../../../utils/middlewares/authorise/fromTargetEducationEntity"
import deleteEducation from "./delete"

const educationRouter: Router = Router()

educationRouter.delete('/:id', authenticate(getAccessToken), authorise(fromTargetEducationEntity), deleteEducation)

educationRouter.use("*", (req: Request, res: Response) => {
    res.status(404).json(`Invalid request {${req.originalUrl}}`)
})

export default educationRouter