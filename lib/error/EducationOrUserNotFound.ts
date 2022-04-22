export default class EducationOrUserNotFound extends Error {
    static defaultMessage: string = "Education or user not found"
    constructor(message: string){
        super(message)
        this.name = "EducationOrUserNotFound"
    }
}