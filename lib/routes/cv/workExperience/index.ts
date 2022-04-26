import { Request, Response, Router } from "express"
import authorise from "../../../utils/middlewares/authorise"
import fromTargetWorkExperienceEntity from "../../../utils/middlewares/authorise/fromTargetWorkExperienceEntity"
import deleteWorkExperience from "./delete"

const workExpericenceRouter: Router = Router()

workExpericenceRouter.delete('/:id', authorise(fromTargetWorkExperienceEntity), deleteWorkExperience)

workExpericenceRouter.use("*", (req: Request, res: Response) => {
    res.status(404).json(`Invalid request {${req.originalUrl}}`)
})

export default workExpericenceRouter