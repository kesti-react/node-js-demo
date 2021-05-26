//Modules
//CommonJS, every file is a module (by default) (every file have its own exports:{})
// Modules - encapsulated Code
const names = require('./4-names');

const sayHi = require('./5-utils')

const data = require('./6-alternative-flavor')

/*
IMPORTANT:
 - WHen you import a module you actually invoke/execute/run it

*/ 
require('./7-mind-grenade')

// console.log(data.items)
// console.log(data.singlePerson)


// sayHi('Susan')
// sayHi(names.john)
// sayHi(names.peter)
 
