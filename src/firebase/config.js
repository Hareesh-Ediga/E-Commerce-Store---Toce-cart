import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
import { getFirestore } from "firebase/firestore"
import { getStorage } from "firebase/storage"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDeo0oHt0nvnvpWMpe5hu8xneY_4VSR5DY",
  authDomain: "ecart-d11ea.firebaseapp.com",
  projectId: "ecart-d11ea",
  storageBucket: "ecart-d11ea.appspot.com",
  messagingSenderId: "487461937312",
  appId: "1:487461937312:web:1bcc3eef1056e7b00d69c5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = getFirestore(app)
export const storage = getStorage(app)

export default app
