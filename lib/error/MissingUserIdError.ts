export default class MissingUserIdError extends Error {
    static defaultMessage: string = "Missing user id"
    constructor(message: string){
        super(message)
        this.name = "MissingUserIdError"

        Object.setPrototypeOf(this, MissingUserIdError.prototype)
    }
}