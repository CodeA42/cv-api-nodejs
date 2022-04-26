import { Router, Request, Response } from "express"
import prepCvData from "../../utils/middlewares/prepCvData"
import updateCv from "./update"
import createCv from "./create"
import authorise from "../../utils/middlewares/authorise"
import getCv from "./get"
import fromTargetCv from "../../utils/middlewares/authorise/fromtargetCv"
import body from "../../utils/middlewares/authorise/body"
import deleteCv from "./delete"
import bodyTargetCv from "../../utils/middlewares/authorise/bodyTargetCv"
import educationRouter from "./education"
import workExpericenceRouter from "./workExperience"
import personalSkillsRouter from "./personalSkills"
import imageRouter from "./image"

const cvRouter: Router = Router()
cvRouter.use('/education', educationRouter)
cvRouter.use('/work-experience', workExpericenceRouter)
cvRouter.use('/personal-skill', personalSkillsRouter)
cvRouter.use('/image', imageRouter)

cvRouter.get('/:id', authorise(fromTargetCv), getCv)

cvRouter.post('/', authorise(body), prepCvData, createCv)

cvRouter.put('/', authorise(bodyTargetCv), prepCvData, updateCv)

cvRouter.delete('/:id', authorise(fromTargetCv), deleteCv)

cvRouter.use("*", (req: Request, res: Response) => {
    res.status(404).json(`Invalid request {${req.originalUrl}}`)
})

export default cvRouter