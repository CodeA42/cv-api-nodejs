export default class MissingWorkExperienceIdError extends Error {
    constructor(message: string = "Missing work experience id"){
        super(message)
        this.name = "MissingWorkExperienceIdError"
    }
}