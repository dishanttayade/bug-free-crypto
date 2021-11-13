const crypto = require("crypto");
const fs = require("fs");
const path = require("path");

exports.getTextAndEncryptSy  = function(req, res) {
  console.log("yes enterd")
  const algorithm = "aes-192-cbc";
  const password = "Password used to generate key";
  const key = crypto.scryptSync(password, "salt", 24);
  const iv = crypto.randomBytes(16);
  const cipher = crypto.createCipheriv(algorithm, key, iv);

  cipher.on("readable", () => {
    console.log(cipher.read().toString("hex"));
  });

  cipher.write(req.body);
  cipher.end();
  res.send(cipher , password)
};

exports.getTextAndDecryptSy = function(req, res) {
    const crypto = require("crypto");
    const algorithm = "aes-192-cbc";
    const password = "Password used to generate key";
    const key = crypto.scryptSync(password, "salt", 24);
    const iv = crypto.randomBytes(16);
    const decipher = crypto.createDecipheriv(algorithm, key, iv);
  
    decipher.on("readable", () => {
      console.log(decipher.read().toString("utf8"));
    });
    decipher.write(req.body, "hex");
    decipher.end();
    res.send(decipher, password)
  };

// exports.EncryptUploadedFile = function(req, res){
//     if(req.files == null){
//         return res.status(400).json({ msg: "No file uploaded!"})
//     }
//     const file = req.files.file;
//     file.mv(`${__dirname}/uploads/${file.name}`, err => {
//         if(err){
//             console.log(err);
//             return res.status(500).send(err);
//         }
//         res.json({ fileName: file.name, filePath: `${__dirname}/uploads/${file.name}`});
//     })
//     encrypted = EncryptFile(fileName) ; 
//     res.send(encrypted); 
// }


// const EncryptFile = function(file){
//   console.log(file); 
//   const algorithm = "aes-192-cbc";
//   const key = crypto.scryptSync(password, "salt", 24);
//   const iv = crypto.randomBytes(16);
//   const decipher = crypto.createDecipheriv(algorithm, key, iv);
//   const fileToEncrypt = path.join("../uploads" , file);
//   const input = fs.createReadStream(fileToEncrypt);
//   const output = fs.createReadStream(`${fileToEncrypt}.sec`);

//   input.pipe(cipher).pipe(output);
//   fs.unlinkSync(fileToEncrypt);
//   console.log("Encryption successfull");
//   return fileToEncrypt.sec ; 
// };

// exports.DecryptFile = function(req, res) {
//   const homeDir = process.env.USERPROFILE;
//   const fileToEncrypt = path.join(homeDir, "file-name.txt");
//   const input = fs.createReadStream(fileToEncrypt);
//   const output = fs.createWriteStream(
//     fileToEncrypt.slice(0, fileToEncrypt.length - 4)
//   );
//   input.pipe(decipher).pipe(output);
//   fs.unlinkSync(fileToEncrypt);
//   console.log("Decryption successfull!!!");
// };
