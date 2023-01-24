// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB191pvErFoUq6t5DZLBSY7GkZVjoqeIus",
  authDomain: "netflix-re-build.firebaseapp.com",
  projectId: "netflix-re-build",
  storageBucket: "netflix-re-build.appspot.com",
  messagingSenderId: "771023614999",
  appId: "1:771023614999:web:6f46b8ad61c2ca54c75852",
  measurementId: "G-4N6581VS9E"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()
const db = getFirestore()
const auth = getAuth()

export default app
export { auth, db }