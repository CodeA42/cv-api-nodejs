export default class MissingCvIdError extends Error {
    static defaultMessage: string = "Missing cv id"
    constructor(message: string){
        super(message)
        this.name = "MissingCvIdError"

        Object.setPrototypeOf(this, MissingCvIdError.prototype)
    }
}