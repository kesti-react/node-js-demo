//OS module
/*  */


const os = require('os')

//now we have all access and methods in the os modules

//info about current user

const user = os.userInfo()
console.log(user)


//method returns the system uptime in seconds

console.log(`The System Uptime is ${os.uptime()}`)


const currentOS = {
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freMem:os.freemem()
}
console.log(currentOS)