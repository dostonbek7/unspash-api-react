import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyAKAhq-QBkZ8MNSjdFWobfQQbAL4dXgusM",
  authDomain: "unsplash-4cf78.firebaseapp.com",
  projectId: "unsplash-4cf78",
  storageBucket: "unsplash-4cf78.appspot.com",
  messagingSenderId: "178949122121",
  appId: "1:178949122121:web:20ed4f9fa0db8c78c57798"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth();
const provider = new GoogleAuthProvider();

export const signUpLogin = async ()=>{
  return signInWithPopup(auth, provider)
  .then((result)=>{
    return result
  })
  .catch((error)=>{
    return error
  })
}
