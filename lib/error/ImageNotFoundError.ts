export default class ImageNotFoundError extends Error {
    constructor(message: string = "Image not found"){
        super(message)
        this.name = "ImageNotFoundError"
    }
}