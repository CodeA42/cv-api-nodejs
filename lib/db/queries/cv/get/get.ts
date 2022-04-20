import { AppDataSource } from "../../..";
import Cv from "../../../Entities/Cv.Entity";
import User from "../../../Entities/User.Entity";

export default async function getCvById(id: string): Promise<Cv> {
    if(id !== undefined){
        try{
            const cvRepo = AppDataSource.getRepository(Cv)
            return await cvRepo.findOneBy({id})
            
        } catch(e) {
            console.error(e)
            return undefined
        }
    }
    return undefined
}