<script>

    import {db} from './firebase'
    import {collectionData} from "rxfire/firestore"
    import {startWith} from "rxjs/operators"


    const query = db.collection('chats').orderBy('sentAt')
    const chats = collectionData(query, 'id').pipe(startWith([]))

    var docRef = db.collection('users').doc('alovelace')

    const testing = () => {

        docRef.get().then((doc) => {
            if(doc.exists) {
                console.log(doc.data())
            } else {
                console.log('Documento não existe')
            }
        }).catch((error) => {
            console.log('Erro ao obter documento: ', error)
        })
    }


</script>


<button on:click={testing}>
    test
</button>