export default class MissingPersonalSkillIdError extends Error {
    constructor(message: string){
        super(message)
        this.name = "MissingPersonalSkillIdError"
    }
}