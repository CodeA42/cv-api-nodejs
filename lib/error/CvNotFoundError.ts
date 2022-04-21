export default class CvNotFoundError extends Error {
    constructor(message: string){
        super(message)
        this.name = "CvNotFoundError"
    }
}