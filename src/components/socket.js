import io from 'socket.io-client'

const socket = io('http://localhost:3001')
    socket.on('messageLog', () => {
    console.log('Socket.io connected!')
})

export default socket