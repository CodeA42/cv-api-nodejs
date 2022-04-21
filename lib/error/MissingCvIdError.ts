export default class MissingCvIdError extends Error {
    constructor(message: string){
        super(message)
        this.name = "MissingCvIdError"
    }
}