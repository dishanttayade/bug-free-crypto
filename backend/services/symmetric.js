const crypto = require("crypto");
const { json } = require("express");
const algorithm = "aes-256-cbc"

const key = process.env.ENCRYPT_KEY || crypto.randomBytes(32)
const iv = process.env.ENCRYPT_IV || crypto.randomBytes(16)

function encrypt (req, res) {
    let text = "hello" ; 
    console.info("Encrypt Key", key)
    console.info("Encrypt iv", iv)
    console.info("Source str", text)
    let cipher = crypto.createCipheriv(algorithm, Buffer.from(key), iv)
    let encrypted = cipher.update(text)
    encrypted = Buffer.concat([encrypted, cipher.final()])
    console.info("Encrypted text", encrypted.toString("hex"))
    res.status(200).send({ encryptedData: encrypted.toString("hex") }) 
}

function decrypt (req, res) {
    // let text = "fdsfd";
    console.log("hello there")
    console.log(req.body); 
    let text = req.body["data"]; 
    console.log(text)
    let encryptedText = Buffer.from(text, 'hex')
    let decipher = crypto.createDecipheriv('aes-256-cbc', Buffer.from(key), iv)
    let decrypted = decipher.update(encryptedText)
    decrypted = Buffer.concat([decrypted, decipher.final()])
    console.info("Decrypted text", decrypted.toString())
    res.status(200).send(decrypted.toString())
}

module.exports = {
    encrypt,
    decrypt
}