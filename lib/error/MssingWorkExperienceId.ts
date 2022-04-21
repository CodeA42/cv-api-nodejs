export default class MssingWorkExperienceId extends Error {
    constructor(message: string){
        super(message)
        this.name = "MssingWorkExperienceId"
    }
}