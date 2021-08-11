var socket = io()
let chat = document.querySelector('#chat')

function showMessage(msg) {
    console.log(msg)
}

socket.on('serverSendMsg', (msg) => {
    showMessage(msg)
})

chat.addEventListener('submit', (event) => {
    event.preventDefault()
    let username = document.querySelector('input[name=username]').value
    let usermessage = document.querySelector('input[name=usermessage]').value

    let msgObject = {
        username: username,
        usermessage: usermessage
    }

    showMessage(msgObject)
    socket.emit('clientSendMsg', msgObject)
})