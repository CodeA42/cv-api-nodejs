export default class MissingEducationId extends Error {
    constructor(message: string){
        super(message)
        this.name = "MissingEducationId"
    }
}