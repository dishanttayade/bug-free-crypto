const express = require('express')
const fileUpload = require('express-fileupload')
const port = 3001;
const app = express();
const cors = require("cors");
const {getTextAndEncryptSy, EncryptUploadedFile, getTextAndDecryptSy } = require('./services/symmetric');
app.use(cors()) 
app.use(fileUpload())
console.log("yes all is well ") 
app.post('/decode' , getTextAndDecryptSy);
app.post('/encode', getTextAndEncryptSy); 


app.listen(port, ()=> console.log(`Server running on http://localhost:${port}`));