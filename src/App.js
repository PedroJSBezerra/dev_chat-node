import React, {useState} from 'react'
import './App.css'

function App() {
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
      <form className="messagearea">
        <input type="text" name="usermessage" placeholder="Digite sua mensagen"/>
        <button type="submit">
          <img className="menu" width="30px" height="30px" src="" alt=""/>
        </button>
      </form>
    </div>
  )
}

export default App
