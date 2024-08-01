const fs = require('fs');
const path = require('path');


const filePath = path.join(__dirname, '1.txt');
//const filePath = path.join(__dirname, 'wrong.txt');


fs.readFile(filePath, 'utf8', (err, data) => {
  if (err) {
    console.log(`Error: The file at ${filePath} does not exist.`);
  } else {
    console.log(`File contents: ${data}`);
  }
});
