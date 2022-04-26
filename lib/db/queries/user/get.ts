import { AppDataSource } from "../.."
import MissingUserIdError from "../../../error/MissingUserIdError"
import UserNotFoundError from "../../../error/UserNotFoundError"
import User from "../../Entities/User.Entity"

export default async function getUserById(id: string): Promise<User | null>{
    if(!id) throw new MissingUserIdError(MissingUserIdError.defaultMessage)
    
    try{
        const user: User = await AppDataSource.manager.findOneBy(User,{ id })
        if(user) return user
    } catch(e) {
        console.error(e)
        return null
    }
    throw new UserNotFoundError(UserNotFoundError.defaultMessage)
}