export default class EducationOrUserNotFound extends Error {
    constructor(message: string){
        super(message)
        this.name = "EducationOrUserNotFound"
    }
}