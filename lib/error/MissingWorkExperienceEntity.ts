export default class MissingWorkExperienceEntity extends Error {
    constructor(message: string){
        super(message)
        this.name = "MissingWorkExperienceEntity"
    }
}