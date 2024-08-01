const fs = require('fs');

fs.mkdir('testDir', (err) => {
  if (err) throw err;
  console.log('"testDir" created.');

  
  fs.writeFile('testDir/testFile.txt', 'This is a test file.', (err) => {
    if (err) throw err;
    fs.rename('testDir/testFile.txt', 'testDir/renamedFile.txt', (err) => {
      if (err) throw err;
      console.log('renamed');
      fs.unlink('testDir/renamedFile.txt', (err) => {
        if (err) throw err;
        console.log(' "renamedFile.txt" deleted.');

        fs.rmdir('testDir', (err) => {
          if (err) throw err;
          console.log('"testDir" deleted.');
        });
      });
    });
  });
});
