import { NextFunction, Request, Response } from "express"
import CvOrUserNotFoundError from "../../../error/CvOrUserNotFoundError"
import EducationOrUserNotFoundError from "../../../error/EducationOrUserNotFoundError"
import MissingCvIdError from "../../../error/MissingCvIdError"
import MissingEducationIdError from "../../../error/MissingEducationIdError"
import MissingPersonalSkillIdError from "../../../error/MissingPersonalSkillIdError"
import MissingWorkExperienceIdError from "../../../error/MissingWorkExperienceIdError"
import PersonalSkillOrUserNotFoundError from "../../../error/PersonalSkillOrUserNotFoundError"
import WorkExperienceOrUserNotFoundError from "../../../error/WorkExperienceOrUserNotFoundError"

// type return_type = ReturnType<(req: Request, res: Response, next: NextFunction) => Promise<void>>

export default function authorise(getTarget: Function){
    return async (req: Request, res: Response, next: NextFunction) => {
        try {
            const target: string = await getTarget(req, res)

            if(!target) return res.status(401).json('user not found')
            
            if(target !== res.locals.user.id){
                if(res.locals.user.admin){
                    next()
                    return
                } else return res.sendStatus(403)
            }

            next()
        } catch(e) {
            if( e instanceof MissingCvIdError ||
                e instanceof MissingEducationIdError ||
                e instanceof MissingPersonalSkillIdError ||
                e instanceof MissingWorkExperienceIdError
            ) return res.status(400).json(e.message)

            if( e instanceof CvOrUserNotFoundError ||
                e instanceof EducationOrUserNotFoundError ||
                e instanceof WorkExperienceOrUserNotFoundError ||
                e instanceof PersonalSkillOrUserNotFoundError
            ) return res.status(404).json(e.message)
        }       
    }
}