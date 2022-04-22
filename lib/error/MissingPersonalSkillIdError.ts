export default class MissingPersonalSkillIdError extends Error {
    static defaultMessage: string = "Missing personal skill id"
    constructor(message: string){
        super(message)
        this.name = "MissingPersonalSkillIdError"
    }
}