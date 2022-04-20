import { QueryFailedError } from "typeorm";
import { AppDataSource } from "../..";
import { CvData } from "../../../common/types";
import Cv from "../../Entities/Cv.Entity";
import Education from "../../Entities/Education.Entity";
import Experience from "../../Entities/Experience.Entity";
import PersonalSkills from "../../Entities/PersonalSkills.Entity";
import UserDetails from "../../Entities/UserDetails.Entity";
import WorkExperience from "../../Entities/WorkExperience.Entity";

export default async function updateCvData(cv: Cv, cvData: Cv){
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

    const queryRunner = AppDataSource.createQueryRunner()
    await queryRunner.connect()
    await queryRunner.startTransaction()
    
    try {
        for(const e of cvData.education){
            let education: Education = new Education()
            
            
            if(e.id){
                try {
                    education = await AppDataSource.manager.findOneBy(Education, {
                        id: e.id
                    })
                } catch (e: any) {}
            }
            
            if(e.type) education.type = e.type
            
            if(!education.experience) education.experience = new Experience()
    
            if(e.experience?.name)          education.experience.name = e.experience.name
            if(e.experience?.town)          education.experience.town = e.experience.town
            if(e.experience?.country)       education.experience.country = e.experience.country
            if(e.experience?.startDate)     education.experience.startDate = e.experience.startDate
            if(e.experience?. stillEngaged !== undefined)  education.experience.stillEngaged = e.experience.stillEngaged
            if(e.experience?.endDate)       education.experience.endDate = e.experience.endDate
            if(e.experience?.information)   education.experience.information = e.experience.information
            
            if(education.id) {
                const result = await queryRunner.manager.save(education)
                console.log(result)
            } else {
                cv.education.push(education)
            }
        }
    
        for(const e of cvData.workExperience){
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
    
            if(!workExperience.experience) workExperience.experience = new Experience()
    
            if(e.experience?.name)          workExperience.experience.name = e.experience.name
            if(e.experience?.town)          workExperience.experience.town = e.experience.town
            if(e.experience?.country)       workExperience.experience.country = e.experience.country
            if(e.experience?.startDate)     workExperience.experience.startDate = e.experience.startDate
            if(e.experience?.stillEngaged)  workExperience.experience.stillEngaged = e.experience.stillEngaged
            if(e.experience?.endDate)       workExperience.experience.endDate = e.experience.endDate
            if(e.experience?.information)   workExperience.experience.information = e.experience.information
    

            if(workExperience.id) {
                await queryRunner.manager.save(workExperience)
            } else {
                cv.workExperience.push(workExperience)
            }
        }
    
        for(const e of cvData.personalSkills){
            let personalSKill: PersonalSkills = new PersonalSkills()
    
            if(e.id){
                try {
                    personalSKill = await AppDataSource.manager.findOneBy(PersonalSkills, {
                        id: e.id
                    })
                } catch (e: any) {}
            }
    
            if(e.name) personalSKill.name = e.name
            if(e.level) personalSKill.level = e.level
    
            if(personalSKill.id) {
                await queryRunner.manager.save(personalSKill)
            } else {
                cv.personalSkills.push(personalSKill)
            }
        }

        // await queryRunner.manager.save(cv)
    } catch(e) {
        console.error(e);
        
        queryRunner.rollbackTransaction()
        
    }finally {
        queryRunner.release()
    }

    // return await AppDataSource.manager.save(cv)
}