export default class ImageNotSavedError extends Error {
    static defaultMessage: string = "Image not saved"
    constructor(message: string){
        super(message)
        this.name = "ImageNotSavedError"
    }
}