export default class MissingPersonalSkillIdError extends Error {
    constructor(message: string = "Missing personal skill id"){
        super(message)
        this.name = "MissingPersonalSkillIdError"
    }
}