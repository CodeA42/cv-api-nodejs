export default class CvNotFoundError extends Error {
    static defaultMessage: string = "Cv not found"
    constructor(message: string){
        super(message)
        this.name = "CvNotFoundError"

        Object.setPrototypeOf(this, CvNotFoundError.prototype)
    }
}