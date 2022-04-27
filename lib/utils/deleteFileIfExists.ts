import * as fs from "fs"

export default async function deleteFileIfExists(path: string) {
    if(fs.existsSync(path)) {
        fs.unlink(path, (err) => {
            if(err) console.error(err)
        })
    }
}