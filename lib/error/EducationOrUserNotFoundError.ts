export default class EducationOrUserNotFoundError extends Error {
    constructor(message: string = "Education or user not found"){
        super(message)
        this.name = "EducationOrUserNotFoundError"
    }
}