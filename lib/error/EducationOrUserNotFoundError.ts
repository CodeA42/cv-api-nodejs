export default class EducationOrUserNotFoundError extends Error {
    static defaultMessage: string = "Education or user not found"
    constructor(message: string){
        super(message)
        this.name = "EducationOrUserNotFoundError"

        Object.setPrototypeOf(this, EducationOrUserNotFoundError.prototype)
    }
}