export default class MissingImageIdError extends Error {
    static defaultMessage: string = "Missing image id"
    constructor(message: string){
        super(message)
        this.name = "MissingImageIdError"

        Object.setPrototypeOf(this, MissingImageIdError.prototype)
    }
}