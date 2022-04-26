export default class ImageOrUserNotFoundError extends Error {
    static defaultMessage: string = "Image or user not found"
    constructor(message: string){
        super(message)
        this.name = "ImageOrUserNotFoundError"

        Object.setPrototypeOf(this, ImageOrUserNotFoundError.prototype)
    }
}