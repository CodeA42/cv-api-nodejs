import { Request, Response, Router } from "express"
import authorise from "../../../utils/middlewares/authorise"
import bodyTargetCv from "../../../utils/middlewares/authorise/bodyTargetCv"
import fromTargetPersonalSkillEntity from "../../../utils/middlewares/authorise/fromTargetPersonalSkillEntity"
import paramTargetImage from "../../../utils/middlewares/authorise/paramTargetImage"
import multer from "../../../utils/middlewares/multer"
import deleteImage from "./delete"
import getImage from "./get"
import putImage from "./put"

const imageRouter: Router = Router()

imageRouter.get("/:id", authorise(paramTargetImage), getImage), 

imageRouter.put('/', multer.single('avatar'), authorise(bodyTargetCv), putImage)

imageRouter.delete('/:id', authorise(fromTargetPersonalSkillEntity), deleteImage)

imageRouter.use("*", (req: Request, res: Response) => {
    res.status(404).json(`Invalid request {${req.originalUrl}}`)
})

export default imageRouter