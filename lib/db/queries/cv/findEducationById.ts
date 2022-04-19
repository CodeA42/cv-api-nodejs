import { AppDataSource } from "../..";
import Education from "../../Entities/Education.Entity";

export default async function findEducationById(id: string): Promise<Education> {
    if(id !== undefined){
        try{
            const educationRepo = AppDataSource.getRepository(Education)
            return await educationRepo.findOneBy({id})
            
        } catch(e) {
            console.error(e)
            return undefined
        }
    }
    return undefined
}