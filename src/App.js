//import React, {useState} from 'react'
import io from 'socket.io-client'
import './App.css'

const socket = io('https://3001-coffee-constrictor-a5psyq0t.ws-us14.gitpod.io')
socket.on('connection', () => {
  console.log('Socket.io connected!')
})

function App() {

  const handleFormSubmit = (event) => {
    event.preventDefault()
    let message = event.target.firstChild.value

    let msgObject = {
      username: 'Pedro',
      usermessage: message
    }


    socket.emit('clientSendMsg', msgObject)

    console.log(msgObject)
    //clear input field
    event.target.reset()
  }

  return (
    <div className="App">
      <div className="header">
        <img width="30px" height="30px" src="" alt=""/>
        <div className="roomprofile">
          <img width="30px" height="30px" src="" alt=""/>
          <div className="roomname"><h3>Room 01</h3></div>
        </div>
        <img className="menu" width="30px" height="30px" src="" alt=""/>
      </div>
      <main>
        <div className="chatLog">
          <li><strong>Sala 01 diz: </strong>Seja bem vindo(a) ao bate papo!</li>
        </div>
      </main>
      <form className="messagearea" onSubmit={handleFormSubmit}>
        <input type="text" name="usermessage" placeholder="Digite sua mensagen"/>
        <button type="submit">
          <img className="menu" width="30px" height="30px" src="" alt=""/>
        </button>
      </form>
    </div>
  )
}

export default App
