//File System (FS built-in module)

const {readFileSync,writeFileSync}  = require('fs')

console.log("start")
//Read from file
const first = readFileSync('./content/first.txt','utf8')
const second = readFileSync('./content/second.txt','utf8')


//create a new file

writeFileSync( './content/ditmemay.txt',`Here is the result: ${first} ${second}`)


console.log("done with this task")
console.log("Starting the next task")