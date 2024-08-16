import { initializeApp } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-auth.js";

  const firebaseConfig = {
    apiKey: "AIzaSyBGBzza0NotXsim6wosXbTJFLWQD3ZOviI",
    authDomain: "todo-web2.firebaseapp.com",
    projectId: "todo-web2",
    storageBucket: "todo-web2.appspot.com",
    messagingSenderId: "702972166109",
    appId: "1:702972166109:web:46656c662b9ce5fcf08034",
    measurementId: "G-T94B1MY9M0"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);       // Authentication

const button = document.getElementById("submit");
button.addEventListener("click", handleLogin);

function handleLogin() {
  console.log("Button clicked, handling login");
  const emailValue = document.getElementById("email").value;
  const passValue = document.getElementById("password").value;

  createUserWithEmailAndPassword(auth, emailValue, passValue)
    .then((userCredential) => {

      console.log("User created:", userCredential.user);

      document.getElementById("email").value = "";
      document.getElementById("password").value = "";
    })
    .catch((error) => {
      console.error("Error signing up:", error);

    });
}
