<script>
	import io from "socket.io-client"
	const socket = io('http://localhost:3000')
	
	let messages = []
	
	socket.on('messageLog', (msgLog) => {
		showMessages(msgLog)
	})
	
	socket.on('serverSendMsg', (msg) => {
	})

	function showMessages(msg){
		messages.push(msg)
	}

	const handleFormSubmit = (event) => {
		event.preventDefault()
		let message = event.target.firstChild.value
		let msgObj = {
			username: "Pedro",
			usermessage: message,
		}
        msgObj.usermessage = message
		socket.emit('clientSendMsg', msgObj)
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
			{#each messages as msg}
				<li><strong>{msg.username}:<br> </strong>{msg.usermessage}</li>
			{/each}
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

	.header{
        background: rgb(84, 156, 216);
        width: 100%;
        position: fixed;
        top: 0;
        display: flex;
        padding: 2%;
    }
    .roomprofile{
        flex: 1;
        display: flex;
    }
    .roomprofile > * {
        margin-left: 2%;
    }
    main{
        position: absolute;
        height: 100%;
        width: 100%;
        padding: 12% 0;
        overflow: hidden;
        display: flex;
        flex-direction: column;
    }
    .chatLog{
        overflow-y: auto;
    }
    .chatLog li{
        background: rgb(189, 209, 226);
        list-style-type: none;
        margin: 3px 2%;
        border-radius: 5px;
        padding: 1%;
        overflow-wrap: break-word;
    }
	.messagearea{
        width: 100%;
        position: fixed;
        bottom: 0;
        display: flex;
        padding: 2%;
    }
    .messagearea input, input:focus {
        border-radius: 10px;
        flex: 1;
        font-size: 1.2rem;
        border: 0;
        background: rgba(0, 0, 0,.2);
        padding: 2%;
    }
    .messagearea input:focus {
        outline: none;
    }
    .messagearea button[type="submit"]{
        border: 0;
        margin-left: 2%;
        background: none;
    }
</style>