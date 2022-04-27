export default class MissingCvIdError extends Error {
    constructor(message: string = "Missing cv id"){
        super(message)
        this.name = "MissingCvIdError"
    }
}