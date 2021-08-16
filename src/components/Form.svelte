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
<form class="messagearea" on:submit={handleFormSubmit}>
    <input type="text" name="usermessage" placeholder="Digite sua mensagen"/>
    <button type="submit">
        <img class="menu" width="30px" height="30px" src="" alt=""/>
    </button>
</form>
<style>
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