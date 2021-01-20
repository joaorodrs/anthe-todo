import firebase from 'firebase/app'

const firebaseConfig = {
  apiKey: "AIzaSyCNTdEDjPclWqgQoTfVXXE94KYPN3gunTM",
  authDomain: "anthe-8a6a2.firebaseapp.com",
  projectId: "anthe-8a6a2",
  storageBucket: "anthe-8a6a2.appspot.com",
  messagingSenderId: "674779847423",
  appId: "1:674779847423:web:a32fd024a77a807afe4aca"
}

try {
  firebase.initializeApp(firebaseConfig)
} catch(error) {
  if (!/already exists/.test(error.message)) {
    console.error('Firebase initialization error', error.stack)
  }
}

export default firebase