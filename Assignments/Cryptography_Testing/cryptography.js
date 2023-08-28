const { createHash, scryptSync, randomBytes } = require("crypto");

const text = "This is the text that needs to be secure";

function hash(input) {
  return createHash("sha256").update(input).digest("hex");
}

// const hash1 = hash(text);
// const hash2 = hash(text + "h");
// const hash3 = hash(text);
// console.log(hash1);
// console.log(hash2);
// console.log(hash3);
const users = [];

function signUp(email, password) {
  const salt = randomBytes(16).toString("hex");
  const hashedPassword = scryptSync(password, salt, 64);
  const user = { email, password: `${salt}:${hashedPassword}` };

  users.push(user);
  console.log(salt);
  console.log(hashedPassword);
  console.log(user);
}

signUp("something", "secret");

function logIn(email, password) {
  const user = users.find((userInfo) => userInfo.email == email);
  const [salt, key] = user.password.split(":");
  const hashedBuffer = scryptSync(password, salt, 64);

  console.log(hashedBuffer);
}
logIn("something", "secret");
logIn("something", "secretish");
