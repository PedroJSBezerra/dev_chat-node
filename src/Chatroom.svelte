<script>
    import {db} from './firebase'
    import {collectionData} from "rxfire/firestore"
    import {startWith} from "rxjs/operators"

    export let user
    export let logout

    
    let message = ''
    const query = db.collection('chats').orderBy('sentAt')
    const chats = collectionData(query, 'id').pipe(startWith([]))
    
    const handleFormSubmit = (event) => {
        event.preventDefault()
        db.collection('chats').add({
            uuid: user.uid,
            message: message,
            avatar: user.photoURL,
            sentAt:+new Date()
        })
        let chatLog = document.querySelector('.messages')
        function scrollDown(){
            chatLog.scrollTop = chatLog.scrollHeight-chatLog.offsetHeight
        }
        scrollDown()
        message = ""
    }
</script>
<main>
    <div class="header">
        <div class="logo">Chatroom</div>
        <button on:click={logout}>Logout</button>
    </div>
    <div class="messages">
        {#each $chats as chat}
            {#if user.uid == chat.uuid}
                <div class="message my-message">
                    <div class="text">
                        {chat.message}
                    </div>
                </div>
            {:else}
                <div class="message other-message">
                    <div class="avatar">
                        <img src={chat.avatar} alt="chat avatar">
                    </div>
                    <div class="text">
                        {chat.message}
                    </div>
                </div>
            {/if}
        {/each}
    </div>
    <form class="form" on:submit={handleFormSubmit}>
        <input type="text" bind:value={message}>
        <button type="submit" >
            <svg enable-background="new 0 0 71 71" height="71px" id="Layer_1" version="1.1" viewBox="0 0 71 71" width="71px" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><path d="M0,0l3,71l25.893-14.47L35,67l9.315-16.937L71,43L0,0z M35,60L8,12l33,37L35,60z" fill="#231F20"/></svg>
        </button>
    </form>
</main>

<style>
    main { 
        height: 100%;
    }
    .header{
        width: 100%;
        height: 50px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 0 10px;
        border-bottom: 1px solid #ddd;
    }
    .header .logo{
        font-size: 15px;
        font-weight: 600;
        color: #111;
    }
    .header button {
        background: transparent;
        padding: 5px 10px;
        border: 1px solid #ddd;
        color: #555;
        font-size: 15px;
        cursor: pointer;
    }
    .form{
        display: flex;
        width: 100%;
        height: 40px;
        border-top: 1px solid #ddd;
    }
    .form input{
        flex: 1;
        border: none;
        outline: none;
        font-size: 16px;
        color: #111;
    }
    .form button {
        padding: 2px;
        font-size: 20px;
        color: #555;
        background: transparent;
        border: none;
        outline: none;
        cursor: pointer;
    }
    .form button svg {
        width: 30px;
        height: 30px;
    }
    .messages{
        width: 100%; 
        height: calc(100% - 90px);
        padding: 10px;
        overflow-y: auto;
    }
    .messages::-webkit-scrollbar{
        width: 4px;
        background: #fff;
    }
    .messages::-webkit-scrollbar-thumb{
        width: 4px;
        background: #888;
    }
    .messages .message {
        margin: 10px 0;
        display: flex;
    }
    .messages .my-message {
        justify-content: flex-end;
    }
    .messages .message .avatar {
        width: 30px;
        height: 30px;
        margin-right: 8px;
    }
    .messages .message .text {
        padding: 10px;
        background: #f0f4f7;
        color: #555;
        font-size: 13px;
        font-weight: 600;
        max-width: fit-content;
        flex: 1;
        border-radius: 5px;
    }
    .messages .message .avatar img {
        width: 100%;
        height: 100%;
    }
    .messages .my-message .text {
        background: #555;
        color: #fff;
    }
</style>