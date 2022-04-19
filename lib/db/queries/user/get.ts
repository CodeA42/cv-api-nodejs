import { AppDataSource } from "../.."
import User from "../../Entities/User.Entity"

export default async function getUserById(id: string): Promise<User[]>{
    if(id !== undefined){
        try{
            return await AppDataSource.manager.find(User,{where:{
                id
            }})
        } catch(e) {
            console.error(e)
        }
    }
    return []
}