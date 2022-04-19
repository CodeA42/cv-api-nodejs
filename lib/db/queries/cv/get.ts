import { AppDataSource } from "../..";
import Cv from "../../Entities/Cv.Entity";

export default async function getCvById(id: string): Promise<Cv[]> {
    if(id !== undefined){
        try{
            return await AppDataSource.manager.find(Cv,{where: {
                id
            }})
        } catch(e) {
            console.error(e)
        }
    }
    return []
}