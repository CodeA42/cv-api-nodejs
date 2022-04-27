export default class MissingEducationIdError extends Error {
    constructor(message: string = "Missing education id"){
        super(message)
        this.name = "MissingEducationIdError"
    }
}