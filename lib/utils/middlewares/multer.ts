import * as multer from 'multer';
import { v4 as uuidv4 } from 'uuid';
import * as path from "path";

// var storage = multer.diskStorage({
//     destination: function (req, file, cb) {
//       cb(null, 'uploads/')
//     },
//     filename: function (req, file, cb) {
//       cb(null, uuidv4() + path.extname(file.originalname)) //Appending extension
//     }
// })

var storage = multer.memoryStorage()
export default multer({storage: storage});