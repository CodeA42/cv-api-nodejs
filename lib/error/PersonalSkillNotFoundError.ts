export default class PersonalSkillNotFoundError extends Error {
    static defaultMessage: string = "Personal skill not found"
    constructor(message: string){
        super(message)
        this.name = "PersonalSkillNotFoundError"
    }
}