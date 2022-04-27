export default class MissingImageError extends Error {
    static defaultMessage: string = "Missing image"
    constructor(message: string){
        super(message)
        this.name = "MissingImageError"
    }
}