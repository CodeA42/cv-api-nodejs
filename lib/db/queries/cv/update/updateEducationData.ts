import { QueryRunner } from "typeorm";
import { AppDataSource } from "../../..";
import Cv from "../../../Entities/Cv.Entity";
import Education from "../../../Entities/Education.Entity";
import Experience from "../../../Entities/Experience.Entity";

export default async function updateEducationData(cv: Cv, cvData: Cv, queryRunner: QueryRunner) {
    for(const e of cvData.education){
        let education = await AppDataSource.manager.findOneBy(Education, {
            id: e.id
        })

        if(!education) {
            education = new Education()
        }
        console.log(education);
        
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
            console.log(cv.education);
        } else {
            cv.education.push(education)
        }
    }
}