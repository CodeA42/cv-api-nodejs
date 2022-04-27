export default class MissingUserIdError extends Error {
    constructor(message: string = "Missing user id"){
        super(message)
        this.name = "MissingUserIdError"
    }
}