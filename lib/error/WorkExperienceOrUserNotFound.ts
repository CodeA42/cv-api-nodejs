export default class WorkExperienceOrUserNotFound extends Error {
    static defaultMessage: string = "Work experience or user not found"
    constructor(message: string){
        super(message)
        this.name = "WorkExperienceOrUserNotFound"
    }
}