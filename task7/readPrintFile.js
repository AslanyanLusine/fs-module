const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'ex.txt'); 

fs.stat(filePath, (err, stats) => {
  if (err) {
    console.error(`Error getting file stats: ${err.message}`);
    return;
  }

  console.log(`File Size: ${stats.size} bytes`);
  console.log(`Creation Date: ${stats.birthtime}`);
  console.log(`Last Modified Date: ${stats.mtime}`);
  console.log(`Is Directory: ${stats.isDirectory()}`);
});
