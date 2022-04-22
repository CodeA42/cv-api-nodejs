export default class MissingWorkExperienceId extends Error {
    static defaultMessage: string = "Missing work experience id"
    constructor(message: string){
        super(message)
        this.name = "MissingWorkExperienceId"
    }
}