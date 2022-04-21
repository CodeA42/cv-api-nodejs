import { QueryRunner } from "typeorm"
import Cv from "../../../Entities/Cv.Entity"
import UserDetails from "../../../Entities/UserDetails.Entity"

export default async function updateHeaderData(cv: Cv, cvData: Cv, queryRunner: QueryRunner) {
    if(cvData.color) cv.color = cvData.color
    if(cvData.type) cv.type = cvData.type
    if(cvData.name) cv.name = cvData.name
    if(cvData.email) cv.email = cvData.email
    
    if(!cv.details){
        cv.details = new UserDetails()
    }
    if(cvData.details) {
        if(cvData.details.address) cv.details.address = cvData.details.address
        if(cvData.details.town) cv.details.town = cvData.details.town
        if(cvData.details.country) cv.details.country = cvData.details.country
        if(cvData.details.phoneNumber) cv.details.phoneNumber = cvData.details.phoneNumber
    }

    return await queryRunner.manager.save(cv)
}