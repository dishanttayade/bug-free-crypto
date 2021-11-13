const express = require('express')
const fileUpload = require('express-fileupload')
const port = 3001;
const app = express();
const cors = require("cors");
const {decrypt, encrypt} = require('./services/symmetric');
app.use(cors()) 
app.use(fileUpload())
app.use(express.json());
console.log("yes all is well ") 
app.post('/decode' , decrypt);
app.post('/encode', encrypt); 
app.listen(port, ()=> console.log(`Server running on http://localhost:${port}`));