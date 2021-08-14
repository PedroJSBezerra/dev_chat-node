const express = require('express'),
    app = express(),
    server = require('http').createServer(app),
    io = require('socket.io')(server),
    path = require('path'),
    socket = require('./socket.js')

app
    .use(express.static(path.join(__dirname, '../public')))
    .set('views', path.join(__dirname, '../public'))
    .engine('html', require('ejs').renderFile)
    .set('view engine', 'html')

    .use('/', (req, res) => {
        res.render('index.html')
    })

socket.start(io)
server.listen(3000)