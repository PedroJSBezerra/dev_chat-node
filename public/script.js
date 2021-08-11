var socket = io()
let chat = document.querySelector('#chat')
let chatLog = document.querySelector('.chatLog')

function showMessage(msg) {
    // console.log(msg)
    chatLog.insertAdjacentHTML("beforeend", `<li><strong>${msg.username}: </strong>${msg.usermessage}</li>`)
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