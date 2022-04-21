export default class ImageOrUserNotFoundError extends Error {
    constructor(message: string){
        super(message)
        this.name = "ImageOrUserNotFoundError"
    }
}