export default class WorkExperienceOrUserNotFoundError extends Error {
    static defaultMessage: string = "Work experience or user not found"
    constructor(message: string){
        super(message)
        this.name = "WorkExperienceOrUserNotFoundError"

        Object.setPrototypeOf(this, WorkExperienceOrUserNotFoundError.prototype)
    }
}