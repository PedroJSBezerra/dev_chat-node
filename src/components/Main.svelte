<main>
    <div class="chatLog">
        <li><strong>Sala 01 diz: </strong>Seja bem vindo(a) ao bate papo!</li>
    </div>
</main>
<style>
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
</style>