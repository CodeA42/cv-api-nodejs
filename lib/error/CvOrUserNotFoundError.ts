export default class CvOrUserNotFoundError extends Error {
    constructor(message: string){
        super(message)
        this.name = "CvOrUserNotFoundError"
    }
}