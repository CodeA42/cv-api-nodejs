import { QueryRunner } from "typeorm";
import { AppDataSource } from "../../..";
import Cv from "../../../Entities/Cv.Entity";
import PersonalSkills from "../../../Entities/PersonalSkills.Entity";

export default async function updatePersonalSkills(cv: Cv, cvData: Cv, queryRunner: QueryRunner) {
    for(const e of cvData.personalSkills){
        let personalSkills = await AppDataSource.manager.findOneBy(PersonalSkills, {
            id: e.id
        }).then(data => {
            if(data) return data
            return new PersonalSkills()
        }).catch(err => {
            return new PersonalSkills()
        })

        if(!personalSkills){
            personalSkills = new PersonalSkills()
        }

        if(e.name) personalSkills.name = e.name
        if(e.level) personalSkills.level = e.level

        if(personalSkills.id) {
            for(let i = 0; i < cv.personalSkills.length; i++){
                if(cv.personalSkills[i].id === personalSkills.id){
                    cv.personalSkills[i] = personalSkills
                }
            }
            cv = await queryRunner.manager.save(cv)
        } else {
            cv.personalSkills.push(personalSkills)
            cv = await  queryRunner.manager.save(cv)
        }
    }
    return cv
}