export default class PersonalSkillOrUserNotFoundError extends Error {
    static defaultMessage: string = "Personal skill or user not found"
    constructor(message: string){
        super(message)
        this.name = "PersonalSkillOrUserNotFoundError"

        Object.setPrototypeOf(this, PersonalSkillOrUserNotFoundError.prototype)
    }
}