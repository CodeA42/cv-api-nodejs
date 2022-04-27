export default class ImageNotSavedError extends Error {
    constructor(message: string = "Image not saved"){
        super(message)
        this.name = "ImageNotSavedError"
    }
}