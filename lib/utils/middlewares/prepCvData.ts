import { NextFunction, Request, Response } from "express"
import { EducationBodyData, EducationData, PersonalSkillsBodyData, WorkExperienceBodyData } from "../../common/types"
import Cv from "../../db/Entities/Cv.Entity"
import Education from "../../db/Entities/Education.Entity"
import Experience from "../../db/Entities/Experience.Entity"
import PersonalSkills from "../../db/Entities/PersonalSkills.Entity"
import UserDetails from "../../db/Entities/UserDetails.Entity"
import WorkExperience from "../../db/Entities/WorkExperience.Entity"

export default function prepCvData(req: Request, res: Response, next: NextFunction) {
    const education: Education[] = [] as Education[]
    req.body.education?.forEach((e: EducationBodyData, i: number) => {
        const experience: Experience = new Experience()
        experience.name = e.name
        experience.town = e.town
        experience.country = e.country
        experience.startDate = e.startDate
        experience.stillEngaged = e.stillEngaged
        experience.endDate = e.endDate
        experience.information = e.information

        education[i] = new Education()
        education[i].id = e.id
        education[i].type = e.type
        education[i].experience = experience
    })
    
    const workExperience: WorkExperience[] = [] as WorkExperience[]
    req.body.workExperience?.forEach((e: WorkExperienceBodyData, i: number) => {
        const experience: Experience = new Experience()
        experience.name = e.name
        experience.town = e.town
        experience.country = e.country
        experience.startDate = e.startDate
        experience.stillEngaged = e.stillEngaged
        experience.endDate = e.endDate
        experience.information = e.information

        workExperience[i] = new WorkExperience()
        workExperience[i].id = e.id
        workExperience[i].type = e.type
        workExperience[i].jobTitle = e.jobTitle
        workExperience[i].experience = experience
    })

    const personalSkills: PersonalSkills[] = [] as PersonalSkills[]
    req.body.personalSkills?.forEach((e: PersonalSkillsBodyData, i: number) => {
        personalSkills[i] = new PersonalSkills()
        personalSkills[i].id = e.id
        personalSkills[i].name = e.name
        personalSkills[i].level = e.level
    })
    
    const cvData: Cv = new Cv()
    if(req.body.address || req.body.town || req.body.country || req.body.phoneNumber){
        const details = new UserDetails()
        details.address = req.body.address
        details.town = req.body.town
        details.country = req.body.country
        details.phoneNumber = req.body.phoneNumber

        cvData.details = details
    }

    cvData.color = req.body.color
    cvData.type = req.body.type
    cvData.name = req.body.name
    cvData.email = req.body.email
    cvData.user = req.body.id
    cvData.education = education
    cvData.workExperience = workExperience
    cvData.personalSkills = personalSkills
    
    res.locals.cvData = cvData
    next()
}