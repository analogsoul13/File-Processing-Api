require("dotenv").config()

const express = require("express")
const cors = require("cors")
const fs = require("fs")
const uploadRoutes = require("./routes/uploadRoutes")

const fileProcessingApp = express()

fileProcessingApp.use(cors())
fileProcessingApp.use(express.json())

const uploadsDir = "uploads"
if (!fs.existsSync(uploadsDir)) {
    fs.mkdirSync(uploadsDir, { recursive: true });
    console.log(`Created folder: ${uploadsDir}`);
}

fileProcessingApp.use("/api", uploadRoutes)

const PORT = process.env.PORT || 3000

fileProcessingApp.listen(PORT, () => {
    console.log("Server running at :", PORT)
})