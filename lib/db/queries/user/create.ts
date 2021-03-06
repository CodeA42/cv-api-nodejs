import { AppDataSource } from "../.."
import MissingUserIdError from "../../../error/MissingUserIdError"
import User from "../../Entities/User.Entity"

export default async function createUser(id: string): Promise<User>{
    if(!id) throw new MissingUserIdError()
    
    const user = new User();
    user.id = id;

    return await AppDataSource.manager.save(user);
}