export default class PersonalSkillNotFoundError extends Error {
    constructor(message: string){
        super(message)
        this.name = "PersonalSkillNotFoundError"
    }
}