export default class UserNotFoundError extends Error {
    static defaultMessage: string = "Missing education id"
    constructor(message: string){
        super(message)
        this.name = "UserNotFoundError"

        Object.setPrototypeOf(this, UserNotFoundError.prototype)
    }
}