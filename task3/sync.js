const fs = require('fs');

try { 
  fs.writeFileSync('sync.txt', 'Hello, this is written synchronously.');
  const data = fs.readFileSync('sync.txt', 'utf8');
  console.log(data);
} catch (err) {
  console.error('Error:', err);
}
