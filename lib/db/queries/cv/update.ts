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
            education = await AppDataSource.manager.findOneBy(Education, {
                id: e.id
            })
        }

        education
    })

    cvData.workExperience.forEach((e: WorkExperience) => {

    })

    cvData.personalSkills.forEach((e: PersonalSkills) => {

    })

    

    return await cvRepo.save(cv);
}