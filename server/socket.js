let msgLog = []
module.exports = {
    start: (io) => {
        io.on('connection', socket => {
            // console.log(`Socket id: ${socket.id}`)
            socket.emit('messageLog', msgLog)
            socket.on('clientSendMsg', (msg) =>{
                msgLog.push(msg)
                socket.broadcast.emit('serverSendMsg', msg)
            })
        })
    }
}