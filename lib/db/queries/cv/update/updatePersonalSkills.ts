import { QueryRunner } from "typeorm";
import { AppDataSource } from "../../..";
import Cv from "../../../Entities/Cv.Entity";
import PersonalSkills from "../../../Entities/PersonalSkills.Entity";

export default async function updatePersonalSkills(cv: Cv, cvData: Cv, queryRunner: QueryRunner) {
    for(const e of cvData.personalSkills){
        let personalSKill = await AppDataSource.manager.findOneBy(PersonalSkills, {
            id: e.id
        })

        if(!personalSKill){
            personalSKill = new PersonalSkills()
        }

        if(e.name) personalSKill.name = e.name
        if(e.level) personalSKill.level = e.level

        if(personalSKill.id) {
            await queryRunner.manager.save(personalSKill)
        } else {
            cv.personalSkills.push(personalSKill)
        }
    }
}