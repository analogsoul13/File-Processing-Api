const express = require("express")
const fs = require("fs")
const upload = require("../middlewares/multerMiddleware")
const sharp = require("sharp")
const pdfParse = require("pdf-parse")

const router = express.Router()

router.post("/upload", upload.single("file"), async (req, res) => {
    try {
        if (!req.file) {
            return res.status(400).json({ message: "No file uploaded" })
        }

        const filePath = req.file.path
        const fileExt = req.file.mimetype.split("/")[1]


        // Image resizing
        if (req.file.mimetype.startsWith("image/")) {

            const resizedDir = "uploads/resized";
            if (!fs.existsSync(resizedDir)) {
                fs.mkdirSync(resizedDir, { recursive: true });
            }

            const resizedPath = `uploads/resized/${Date.now()}-resized.${fileExt}`

            await sharp(filePath)
                .resize(500, 500)
                .toFile(resizedPath)

            return res.status(200).json({
                message: "Image resized succesfully",
                resizedPath
            })
        }

        // Pdf text extraction
        if(req.file.mimetype === "application/pdf") {
            const dataBuffer = fs.readFileSync(filePath)
            const pdfData = await pdfParse(dataBuffer)

            let extractedText = pdfData.text

            extractedText = extractedText.replace(/\n+/g,' ').trim() // Replace consecutive newlines with space
            extractedText = extractedText.replace(/\s+/g,' ') //Replace consecutive spaces with a single space

            return res.status(200).json({
                message:"Text from PDF extracted succesfully",
                text: extractedText
            })
        }

        res.json({ message: "File uploaded succesfully" })

    } catch (error) {
        console.log(error)
        res.status(500).json({ error: "File processing failed" })


    }

})

module.exports = router