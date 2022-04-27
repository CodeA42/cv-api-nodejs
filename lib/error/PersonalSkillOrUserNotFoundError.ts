export default class PersonalSkillOrUserNotFoundError extends Error {
    constructor(message: string = "Personal skill or user not found"){
        super(message)
        this.name = "PersonalSkillOrUserNotFoundError"
    }
}