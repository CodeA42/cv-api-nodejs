import { Request, Response, Router } from "express"
import authorise from "../../../utils/middlewares/authorise"
import fromTargetEducationEntity from "../../../utils/middlewares/authorise/fromTargetEducationEntity"
import deleteEducation from "./delete"

const educationRouter: Router = Router()

educationRouter.delete('/:id', authorise(fromTargetEducationEntity), deleteEducation)

educationRouter.use("*", (req: Request, res: Response) => {
    res.status(404).json(`Invalid request {${req.originalUrl}}`)
})

export default educationRouter