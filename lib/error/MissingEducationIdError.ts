export default class MissingEducationIdError extends Error {
    static defaultMessage: string = "Missing education id"
    constructor(message: string){
        super(message)
        this.name = "MissingEducationIdError"

        Object.setPrototypeOf(this, MissingEducationIdError.prototype)
    }
}