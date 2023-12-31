const { createCipheriv, randomBytes, createDecipheriv } = require("crypto");

const message = "this is the secret message";
const key = randomBytes(32);
const iv = randomBytes(16);

const cipher = createCipheriv("aes256", key, iv);

// encrypt
const encryptedMessage =
  cipher.update(message, "utf-8", "hex") + cipher.final("hex");

console.log(encryptedMessage);

const decipher = createDecipheriv("aes256", key, iv);
const decryptedMessage =
  decipher.update(encryptedMessage, "hex", "utf-8") + decipher.final("utf-8");

console.log(decryptedMessage);
