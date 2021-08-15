var socket = io()
let messagearea = document.querySelector('.messagearea')
let chatLog = document.querySelector('.chatLog')

function showMessage(msg) {
    // console.log(msg)
    chatLog.insertAdjacentHTML("beforeend", `<li><strong>${msg.username}:<br> </strong>${msg.usermessage}</li>`)

    function scrollDown(){
        chatLog.scrollTop = chatLog.scrollHeight-chatLog.offsetHeight
    }
    scrollDown()
}

socket.on('messageLog', (messages) => {
    for(msg of messages){
        showMessage(msg)
    }
})

function showLog(messageLog) {
    messageLog.forEch('msg', showMessage(msg))
}

socket.on('serverSendMsg', (msg) => {
    showMessage(msg)
})

messagearea.addEventListener('submit', (event) => {
    event.preventDefault()

    let username = "Pedro"//document.querySelector('input[name=username]').value
    let usermessage = document.querySelector('input[name=usermessage]').value

    let msgObject = {
        username: username,
        usermessage: usermessage
    }

    showMessage(msgObject)
    socket.emit('clientSendMsg', msgObject)
    messagearea.reset()
})