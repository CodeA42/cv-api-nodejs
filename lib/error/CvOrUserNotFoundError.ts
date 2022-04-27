export default class CvOrUserNotFoundError extends Error {
    constructor(message: string = "Cv or user not found"){
        super(message)
        this.name = "CvOrUserNotFoundError"
    }
}