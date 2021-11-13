exports.FileUpload = function(req, res){
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
        res.json({ fileName: file.name, filePath: `${__dirname}/uploads/${file.name}`});
    })
}