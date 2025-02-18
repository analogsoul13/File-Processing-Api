require("dotenv").config()

const express = require("express")
const cors = require("cors")
const uploadRoutes = require("./routes/uploadRoutes")

const fileProcessingApp = express()

fileProcessingApp.use(cors())
fileProcessingApp.use(express.json())

fileProcessingApp.use("/api", uploadRoutes)

const PORT = process.env.PORT || 3000

fileProcessingApp.listen(PORT, () => {
    console.log("Server running at :", PORT)
})