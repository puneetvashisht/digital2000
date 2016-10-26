var fs = require('fs')

console.log('Starting to read.....')

//var contentsOfFile = fs.readFileSync('files/node.txt')

fs.readFile('files/node.txt', function(error, contentsOfFile){
    if(error) console.log(error)
    console.log('Contents : ' + contentsOfFile)
})



console.log('Finished Reading.....')