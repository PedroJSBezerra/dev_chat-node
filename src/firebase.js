import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDprJtmXZ0mWOLL0GInl9LnbWGqzL35rYg",
    authDomain: "realtime-chatapp-d1171.firebaseapp.com",
    projectId: "realtime-chatapp-d1171",
    storageBucket: "realtime-chatapp-d1171.appspot.com",
    messagingSenderId: "437130500524",
    appId: "1:437130500524:web:e33b8a0d1fff7da26b4209",
    measurementId: "G-QBP35HXKEB"
};

firebase.initializeApp(firebaseConfig)

export const auth = firebase.auth()
export const googleProvider = new firebase.auth.GoogleAuthProvider()
export const db = firebase.firestore()