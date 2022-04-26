import { Request, Response, Router } from "express"
import authorise from "../../../utils/middlewares/authorise"
import fromTargetPersonalSkillEntity from "../../../utils/middlewares/authorise/fromTargetPersonalSkillEntity"
import deletePersonalSkill from "./delete"

const personalSkillsRouter: Router = Router()

personalSkillsRouter.delete('/:id', authorise(fromTargetPersonalSkillEntity), deletePersonalSkill)

personalSkillsRouter.use("*", (req: Request, res: Response) => {
    res.status(404).json(`Invalid request {${req.originalUrl}}`)
})

export default personalSkillsRouter