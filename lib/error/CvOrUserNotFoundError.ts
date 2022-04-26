export default class CvOrUserNotFoundError extends Error {
    static defaultMessage: string = "Cv or user not found"
    constructor(message: string){
        super(message)
        this.name = "CvOrUserNotFoundError"

        Object.setPrototypeOf(this, CvOrUserNotFoundError.prototype)
    }
}