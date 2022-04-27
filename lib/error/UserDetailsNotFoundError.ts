export default class UserDetailsNotFoundError extends Error {
    constructor(message: string = "User details not found"){
        super(message)
        this.name = "UserDetailsNotFoundError"
    }
}