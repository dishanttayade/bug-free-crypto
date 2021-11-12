const express = require('express')
const fileUpload = require('express-fileupload')
const port = 3001;
const app = express();
// const cors = require('cors')

const cors = require("cors");


app.use(cors()) 
app.use(fileUpload())
// app.use(cors())
app.post('/upload', (req, res) => {
    if(req.files == null){
        return res.status(400).json({ msg: "No file uploaded!"})
    }
    // console.log(req)
    const file = req.files.file;

    file.mv(`${__dirname}/uploads/${file.name}`, err => {
        if(err){
            console.log(err);
            return res.status(500).send(err);
        }
        res.json({ fileName: file.name, filePath: `/uploads/${file.name}`});
    })
})



app.listen(port, ()=> console.log(`Server running on http://localhost:${port}`));