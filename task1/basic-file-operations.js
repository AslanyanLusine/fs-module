const fs = require('fs')
const path = require('path')

fs.writeFile('example.txt','Hello world!', ()=>{})
fs.appendFile('example.txt', 'This is Node.js FS module.', ()=>{})
fs.readFile('example.txt', 'utf8', (err, data)=>{
    if(err) {console.log(err.message)}
    console.log(data)
})
