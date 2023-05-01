// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBJ6CTz1qwHTO4UwfYON_T6JxkWo87DP80",
  authDomain: "chef-recipe-hunter-clien-fbe0f.firebaseapp.com",
  projectId: "chef-recipe-hunter-clien-fbe0f",
  storageBucket: "chef-recipe-hunter-clien-fbe0f.appspot.com",
  messagingSenderId: "550454582362",
  appId: "1:550454582362:web:fd7ffa6c7af99f1445cc63",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
