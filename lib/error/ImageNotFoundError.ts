export default class ImageNotFoundError extends Error {
    static defaultMessage: string = "Image not found"
    constructor(message: string){
        super(message)
        this.name = "ImageNotFoundError"

        Object.setPrototypeOf(this, ImageNotFoundError.prototype)
    }
}