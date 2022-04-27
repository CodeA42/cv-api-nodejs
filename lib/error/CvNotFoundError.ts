export default class CvNotFoundError extends Error {
    constructor(message: string = "Cv not found"){
        super(message)
        this.name = "CvNotFoundError"
    }
}