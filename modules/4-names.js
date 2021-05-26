//local
const secret = "Don't share this"
//share
const john = "john";
let peter = 'peter';

//whatever is dump in the exports, you can access it anywhere in the application

//User module.exports to put the variable that you want to share across your application
module.exports = {john,peter}
