<script>
	import io from 'socket.io-client'

	const socket = io('http://localhost:3001')
		socket.on('connection', () => {
		console.log('Socket.io connected!')
	})

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

</script>

<div class="App">
	<div class="header">
	  <img width="30px" height="30px" src="" alt=""/>
	  <div class="roomprofile">
		<img width="30px" height="30px" src="" alt=""/>
		<div class="roomname"><h3>Room 01</h3></div>
	  </div>
	  <img class="menu" width="30px" height="30px" src="" alt=""/>
	</div>
	<main>
	  <div class="chatLog">
		<li><strong>Sala 01 diz: </strong>Seja bem vindo(a) ao bate papo!</li>
	  </div>
	</main>
	<form class="messagearea" on:submit={handleFormSubmit}>
	  <input type="text" name="usermessage" placeholder="Digite sua mensagen"/>
	  <button type="submit">
		<img class="menu" width="30px" height="30px" src="" alt=""/>
	  </button>
	</form>
  </div>

<style>
</style>