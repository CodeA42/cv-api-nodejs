export default class WorkExperienceOrUserNotFound extends Error {
    constructor(message: string){
        super(message)
        this.name = "WorkExperienceOrUserNotFound"
    }
}