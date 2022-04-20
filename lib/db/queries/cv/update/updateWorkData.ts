import { QueryRunner } from "typeorm";
import { AppDataSource } from "../../..";
import Cv from "../../../Entities/Cv.Entity";
import Experience from "../../../Entities/Experience.Entity";
import WorkExperience from "../../../Entities/WorkExperience.Entity";

export default async function updateWorkData(cv: Cv, cvData: Cv, queryRunner: QueryRunner) {
    for(const e of cvData.workExperience){
        let workExperience = await AppDataSource.manager.findOneBy(WorkExperience, {
            id: e.id
        }).then(data => {
            if(data) {
                return data
            }
            return new WorkExperience()
        }).catch(err => {
            return new WorkExperience()
        })

        if(!workExperience) {
            workExperience = new WorkExperience()
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
            for(let i = 0; i < cv.workExperience.length; i++){
                if(cv.workExperience[i].id === workExperience.id){
                    cv.workExperience[i] = workExperience
                }
            }
            return queryRunner.manager.save(cv)
        } else {
            cv.workExperience.push(workExperience)
            return queryRunner.manager.save(cv)
        }
    }
    return cv
}