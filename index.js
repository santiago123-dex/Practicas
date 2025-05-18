/* const fs = require('fs')

fs.readFileSync('./front/index.html')

fs.writeFileSync('./data/index3.txt') */


// sobrescribimos el codigo de manera asincrona 
fs.readFile('./data/first.txt', function(error, data){
    if(error){
        console.log(error)
    }
    console.log(data)

// Lee el archivo despues de que se ejecute el anterior
    fs.readFile('./data/second.txt', function(error, data){
        if(error){
            console.log(error)
        }
        console.log(data)
        
    })
})