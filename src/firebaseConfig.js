// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAWZc8qibm_5luDPrfzT9h9oR7JNKowE8M",
  authDomain: "facerecognitionsystem-baa9b.firebaseapp.com",
  databaseURL: "https://facerecognitionsystem-baa9b-default-rtdb.firebaseio.com",
  projectId: "facerecognitionsystem-baa9b",
  storageBucket: "facerecognitionsystem-baa9b.appspot.com",
  messagingSenderId: "980424030441",
  appId: "1:980424030441:web:4e1f850222ef02840d1878",
  measurementId: "G-KQDRETK2XL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const storage = getStorage(app);
export { storage };