# Image Resizing and PDF Text Extraction API

This is an API for image resizing and PDF text extraction. Users can upload images to be resized or PDFs to extract text from. The API uses `sharp` for image resizing and `pdf-parse` for extracting text from PDFs.

## Features
- Resize images to a fixed dimension (500x500).
- Extract text from PDF files and clean the text.
- Supports uploading files via POST requests.

## Tech Stack
- Node.js
- Express.js
- Multer (file upload)
- Sharp (image resizing)
- pdf-parse (PDF text extraction)
- dotenv (environment variables)
- fs (file system management)

## Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/analogsoul13/File-Processing-Api.git
2. **Install dependencies:**
   ```bash
   npm install
3. **Running the application usind nodemon:**
   ```bash
   nodemon
4. **Using npm start:**
   ```bash
   npm start
## Upload ans Test Api using Postman
1. **By default the server runs on:**
   ```bash
   http://localhost:3000
2. **For testing in postman the endpoint is:**
   ```bash
   http://localhost:3000/api/upload
3. **In the body set the key name to "file" and add the file in the value field and send a POST request**


   
