import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyDdxPLv3CGA4h5yAIzUG2Jkct_Yo50PzbM",
  authDomain: "mymoney-fef13.firebaseapp.com",
  projectId: "mymoney-fef13",
  storageBucket: "mymoney-fef13.appspot.com",
  messagingSenderId: "268441786201",
  appId: "1:268441786201:web:7c6740cfcbeab0888a5e48"
}

// firebase init
firebase.initializeApp(firebaseConfig)

// init service
const projectFirestore = firebase.firestore()
const projectAuth = firebase.auth()

export { projectFirestore, projectAuth }