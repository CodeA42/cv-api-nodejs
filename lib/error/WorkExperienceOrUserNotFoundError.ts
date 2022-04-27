export default class WorkExperienceOrUserNotFoundError extends Error {
    constructor(message: string = "Work experience or user not found"){
        super(message)
        this.name = "WorkExperienceOrUserNotFoundError"
    }
}