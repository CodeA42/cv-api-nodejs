export default class ImageNotFoundError extends Error {
    constructor(message: string){
        super(message)
        this.name = "ImageNotFoundError"
    }
}