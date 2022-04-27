import { Request, Response, Router } from "express"
import authorise from "../../../utils/middlewares/authorise"
import bodyTargetCv from "../../../utils/middlewares/authorise/bodyTargetCv"
import fromTargetCv from "../../../utils/middlewares/authorise/fromtargetCv"
import multer from "../../../utils/middlewares/multer"
import deleteImage from "./delete"
import getImage from "./get"
import putImage from "./put"

const imageRouter: Router = Router()

imageRouter.get("/:id", authorise(fromTargetCv), getImage), 

imageRouter.put('/', multer.single('image'), authorise(bodyTargetCv), putImage)

imageRouter.delete('/:id', authorise(fromTargetCv), deleteImage)

imageRouter.use("*", (req: Request, res: Response) => {
    res.status(404).json(`Invalid request {${req.originalUrl}}`)
})

export default imageRouter