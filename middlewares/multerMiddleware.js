const multer = require("multer")
const path = require("path")

const storage = multer.diskStorage({
    destination: "./uploads/",
    filename: (req,file,cb) => {
        const ext = path.extname(file.originalname)
        cb(null, `${Date.now()}-${file.fieldname}${ext}`)
    }
})

const fileFilter = (req,file,cb) => {
    const allowedTypes = ["image/jpeg", "image/png", "application/pdf"];

    if (allowedTypes.includes(file.mimetype)) {
        cb(null, true);
      } else {
        cb(new Error("Only images (jpeg, png) and PDFs are allowed"), false);
      }
}

const upload = multer({
    storage: storage,
    limits: {fileSize:5 * 1024 * 1024}, //5mb
    fileFilter: fileFilter,
})

module.exports = upload