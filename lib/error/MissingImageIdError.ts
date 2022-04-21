export default class MissingImageIdError extends Error {
    constructor(message: string){
        super(message)
        this.name = "MissingImageIdError"
    }
}