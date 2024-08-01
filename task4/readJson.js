const fs = require('fs')
fs.readFile('data.json', 'utf8',(err,data)=>{
    if(err) throw err
    let users = JSON.parse(data)
    
    users = [...users, {name: 'Hayk', age: 25}]
    const newUsers = JSON.stringify(users)
    console.log(users)
})