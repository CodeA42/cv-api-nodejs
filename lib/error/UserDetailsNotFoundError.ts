export default class UserDetailsNotFoundError extends Error {
    static defaultMessage: string = "User details not found"
    constructor(message: string){
        super(message)
        this.name = "UserDetailsNotFoundError"

        Object.setPrototypeOf(this, UserDetailsNotFoundError.prototype)
    }
}