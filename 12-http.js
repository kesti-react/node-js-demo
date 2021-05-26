//Http built-in module

const http = require('http')
const server = http.createServer((req,res)=>{
    
    if(req.url ==='/'){
        res.end('Welcome to our home page')

    }
    if(req.url ==='/about'){
        res.end('This is the about page')
    }
    res.end(`
        <h1>Opps!</h1>
        <p>Deo co cai lon gi o day dau</p>
        <a href="/>Return</a>

    `)
    
    
})

//specify what port to listen too

server.listen(5001)

