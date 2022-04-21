import { Request, Response, Router } from "express"
import authenticate from "../../../utils/middlewares/authenticateUser"
import getAccessToken from "../../../utils/middlewares/authenticateUser/getAccessToken"
import authorise from "../../../utils/middlewares/authorise"
import bodyTargetCv from "../../../utils/middlewares/authorise/bodyTargetCv"
import fromTargetPersonalSkillEntity from "../../../utils/middlewares/authorise/fromTargetPersonalSkillEntity"
import multer from "../../../utils/middlewares/multer"
import deleteImage from "./delete"
import putImage from "./put"

const imageRouter: Router = Router()

imageRouter.delete('/:id', authenticate(getAccessToken), authorise(fromTargetPersonalSkillEntity), deleteImage)

imageRouter.put('/', authenticate(getAccessToken), multer.single('avatar'), authorise(bodyTargetCv), putImage)

imageRouter.use("*", (req: Request, res: Response) => {
    res.status(404).json(`Invalid request {${req.originalUrl}}`)
})

export default imageRouter