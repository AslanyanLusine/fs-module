const fs = require('fs')
fs.writeFile('async.txt', 'Hello this is written asynchronously',(err,data)=>{
})
fs.readFile('async.txt', 'utf8', (err, data)=>{
    console.log(data)
})