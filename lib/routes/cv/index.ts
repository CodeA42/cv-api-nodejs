import { Router, Request, Response } from "express"
import authenticate from "../../utils/middlewares/authenticateUser"
import getAccessToken from "../../utils/middlewares/authenticateUser/getAccessToken"
import multer from "../../utils/middlewares/multer"
import prepCvData from "../../utils/middlewares/prepCvData"
import updateCv from "./update"
import createCv from "./create"
import changeImage from "./image"
import authorise from "../../utils/middlewares/authorise"
import getCv from "./get"
import fromTargetCv from "../../utils/middlewares/authorise/fromtargetCv"
import body from "../../utils/middlewares/authorise/body"
import deleteCv from "./delete"
import bodyTargetCv from "../../utils/middlewares/authorise/bodyTargetCv"

const cvRouter: Router = Router()

cvRouter.get('/:id', authenticate(getAccessToken), authorise(fromTargetCv), getCv)

cvRouter.post('/', authenticate(getAccessToken), authorise(body), prepCvData, createCv)

cvRouter.put('/', authenticate(getAccessToken), authorise(bodyTargetCv), prepCvData, updateCv)
cvRouter.put('/image', authenticate(getAccessToken), multer.single('avatar'), authorise(body), changeImage)

cvRouter.delete('/:id', authenticate(getAccessToken), authorise(fromTargetCv), deleteCv)

cvRouter.use("*", (req: Request, res: Response) => {
    res.status(404).json(`Invalid request {${req.originalUrl}}`)
})

export default cvRouter