import { AppDataSource } from "../.."
import { UserData } from "../../../common/types"
import MissingUserIdError from "../../../error/MissingUserIdError"
import UserNotFoundError from "../../../error/UserNotFoundError"
import User from "../../Entities/User.Entity"
import UserDetails from "../../Entities/UserDetails.Entity"

export default async function updateUserData(userData: UserData): Promise<User | null>{
    if(!userData.id) throw new MissingUserIdError()
    
    const user = await AppDataSource.manager.findOneBy(User, {id: userData.id})
    if(!user) throw new UserNotFoundError()

    if(userData.firstName)              user.firstName = userData.firstName
    if(userData.lastName)               user.lastName = userData.lastName

    if(!user.details) user.details = new UserDetails()

    if(userData.details.image)          user.details.image = userData.details.image
    if(userData.details.address)        user.details.address = userData.details.address
    if(userData.details.town)           user.details.town = userData.details.town
    if(userData.details.country)        user.details.country = userData.details.country
    if(userData.details.phoneNumber)    user.details.phoneNumber = userData.details.phoneNumber

    return await AppDataSource.manager.save(user)
}