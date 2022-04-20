import { AppDataSource } from "../..";
import { UserData } from "../../../common/types";
import User from "../../Entities/User.Entity";

export default async function updateUserData(userData: UserData){
    const userRepo = AppDataSource.getRepository(User);
    const user = await userRepo.findOneBy({id: userData.id})

    if(userData.firstName)              user.firstName = userData.firstName
    if(userData.lastName)               user.lastName = userData.lastName

    if(userData.details.avatar)         user.details.avatar = userData.details.avatar
    if(userData.details.address)        user.details.address = userData.details.address
    if(userData.details.town)           user.details.town = userData.details.town
    if(userData.details.country)        user.details.country = userData.details.country
    if(userData.details.phoneNumber)    user.details.phoneNumber = userData.details.phoneNumber

    return await userRepo.save(user)
}