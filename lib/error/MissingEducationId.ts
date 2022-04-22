export default class MissingEducationId extends Error {
    static defaultMessage: string = "Missing education id"
    constructor(message: string){
        super(message)
        this.name = "MissingEducationId"
    }
}