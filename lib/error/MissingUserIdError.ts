export default class MissingUserIdError extends Error {
    constructor(message: string){
        super(message)
        this.name = "MissingUserIdError"
    }
}