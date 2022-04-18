import { AppDataSource } from "../..";
import User from "../../Entities/User.Entity";

export default async function createUser(id: string){
    const user = new User();
    user.id = id;

    return await AppDataSource.manager.save(user);
}