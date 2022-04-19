import { QueryFailedError } from "typeorm";
import { AppDataSource } from "../..";
import { CvData } from "../../../common/types";
import Cv from "../../Entities/Cv.Entity";
import Education from "../../Entities/Education.Entity";
import PersonalSkills from "../../Entities/PersonalSkills.Entity";
import UserDetails from "../../Entities/UserDetails.Entity";
import WorkExperience from "../../Entities/WorkExperience.Entity";

export default async function updateCvData(cv: Cv, cvData: Cv): Promise<Cv>{

    const cvRepo = AppDataSource.getRepository(Cv);
    // console.log(cv);
    // console.log(cvData);
    
    if(cvData.color) cv.color = cvData.color
    if(cvData.type) cv.type = cvData.type
    if(cvData.name) cv.name = cvData.name
    if(cvData.email) cv.email = cvData.email
    
    if(!cv.details){
        cv.details = new UserDetails()
    }

    if(cvData.details.avatar) cv.details.avatar = cvData.details.avatar
    if(cvData.details.address) cv.details.address = cvData.details.address
    if(cvData.details.town) cv.details.town = cvData.details.town
    if(cvData.details.country) cv.details.country = cvData.details.country
    if(cvData.details.phoneNumber) cv.details.phoneNumber = cvData.details.phoneNumber
    
    cvData.education.forEach(async (e: Education) => {
        let education: Education = new Education()
        
        if(e.id){
            try {
                education = await AppDataSource.manager.findOneBy(Education, {
                    id: e.id
                })
            } catch (e: any) {}
        }

        if(e.type) education.type = e.type
        if(e.experience?.name) education.experience.name = e.experience.name
        if(e.experience?.town) education.experience.town = e.experience.town
        if(e.experience?.country) education.experience.country = e.experience.country
        if(e.experience?.startDate) education.experience.startDate = e.experience.startDate
        if(e.experience?.stillEngaged) education.experience.stillEngaged = e.experience.stillEngaged
        if(e.experience?.endDate) education.experience.endDate = e.experience.endDate
        if(e.experience?.information) education.experience.information = e.experience.information

        cv.education.push(education)
    })

    cvData.workExperience.forEach(async (e: WorkExperience) => {
        let workExperience: WorkExperience = new WorkExperience()

        if(e.id){
            try {
                workExperience = await AppDataSource.manager.findOneBy(WorkExperience, {
                    id: e.id
                })
            } catch (e: any) {}
        }

        if(e.type) workExperience.type = e.type
        if(e.jobTitle) workExperience.jobTitle = e.jobTitle
        if(e.experience?.name) workExperience.experience.name = e.experience.name
        if(e.experience?.town) workExperience.experience.town = e.experience.town
        if(e.experience?.country) workExperience.experience.country = e.experience.country
        if(e.experience?.startDate) workExperience.experience.startDate = e.experience.startDate
        if(e.experience?.stillEngaged) workExperience.experience.stillEngaged = e.experience.stillEngaged
        if(e.experience?.endDate) workExperience.experience.endDate = e.experience.endDate
        if(e.experience?.information) workExperience.experience.information = e.experience.information

        cv.workExperience.push(workExperience)
    })

    cvData.personalSkills.forEach(async (e: PersonalSkills) => {
        let personalSKill: PersonalSkills = new PersonalSkills()

        if(e.id){
            try {
                personalSKill = await AppDataSource.manager.findOneBy(PersonalSkills, {
                    id: e.id
                })
            } catch (e: any) {}
        }

        if(personalSKill.name) personalSKill.name = e.name
        if(personalSKill.level) personalSKill.level = e.level

        cv.personalSkills.push(personalSKill)
    })

    console.log(cv);
    
    // return await cvRepo.save(cv);
}