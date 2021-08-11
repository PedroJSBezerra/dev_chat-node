const express = require('express')
const app = express()
const server = require('http').createServer(app)
const io = require('socket.io')(server)
const path = require('path')

app
    .use(express.static(path.join(__dirname, 'public')))
    .set('views', path.join(__dirname, 'public'))
    .engine('html', require('ejs').renderFile)
    .set('view engine', 'html')

    .use('/', (req,res) => {
        res.render('index.html')
    })

    
let msgLog = []


io.on('connection', socket => {
    console.log(`Socket id: ${socket.id}`)

    socket.on('clientSendMsg', (msg) =>{
        msgLog.push(msg)
        console.log(msgLog)
        
        socket.broadcast.emit('serverSendMsg', msg)
    })
    
})

server.listen(3000)