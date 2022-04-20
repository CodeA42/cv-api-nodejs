import { Request, Response, Router } from "express"
import authenticate from "../../../utils/middlewares/authenticateUser"
import getAccessToken from "../../../utils/middlewares/authenticateUser/getAccessToken"
import authorise from "../../../utils/middlewares/authorise"
import fromTargetWorkExperienceEntity from "../../../utils/middlewares/authorise/fromTargetWorkExperienceEntity"
import deleteWorkExperience from "./delete"

const workExpericenceRouter: Router = Router()

workExpericenceRouter.delete('/:id', authenticate(getAccessToken), authorise(fromTargetWorkExperienceEntity), deleteWorkExperience)

workExpericenceRouter.use("*", (req: Request, res: Response) => {
    res.status(404).json(`Invalid request {${req.originalUrl}}`)
})

export default workExpericenceRouter