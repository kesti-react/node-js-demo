//Path built-in module

const path = require('path')


//return platform specific separator
console.log(path.sep)


const filePath = path.join('/built-in-modules','text.txt')

console.log(filePath)



const base = path.basename(filePath)

console.log(base)



//Return an absolute path


const absolutePath = path.resolve(__dirname,'built-in-modules','text.txt')
console.log(absolutePath)