const fs = require('fs');

const imageAsBase64 = fs.readFileSync('./1.jpeg', 'base64');
console.log(imageAsBase64)

// const buffer = Buffer.from(imageAsBase64, "base64");
// fs.writeFileSync("test.jpg", buffer);