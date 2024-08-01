const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'ex.txt'); // Replace with your file path

fs.chmod(filePath, 0o444, (err) => { // 0o444 sets read-only permissions
  if (err) {
    console.error(`Error changing file permissions: ${err.message}`);
    return;
  }

  console.log('File permissions changed to read-only.');
});
