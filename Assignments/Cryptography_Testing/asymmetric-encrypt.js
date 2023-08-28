const { publicEncrypt, privateDecrypt } = require("crypto");
const { publicKey, privateKey } = require("./public-private-key");

const message =
  "this is the secret message, you will never know what it means without the private key....... hopefully!";

const encryptedData = publicEncrypt(publicKey, Buffer.from(message));
console.log(encryptedData.toString("hex"));

const decryptedData = privateDecrypt(privateKey, encryptedData);
console.log(decryptedData.toString());
