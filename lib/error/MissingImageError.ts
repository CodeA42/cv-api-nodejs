export default class MissingImageError extends Error {
    constructor(message: string = "Missing image"){
        super(message)
        this.name = "MissingImageError"
    }
}