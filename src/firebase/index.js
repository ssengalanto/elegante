import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'

const config = {
  apiKey: process.env.REACT_APP_FIRESTORE_API_KEY,
  authDomain: 'elegante-1eb18.firebaseapp.com',
  databaseURL: 'https://elegante-1eb18.firebaseio.com',
  projectId: 'elegante-1eb18',
  storageBucket: 'elegante-1eb18.appspot.com',
  messagingSenderId: '12346060707'
}
firebase.initializeApp(config)

export default firebase
