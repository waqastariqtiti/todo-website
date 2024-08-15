
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-app.js";
import {
    getAuth,
    createUserWithEmailAndPassword,
  } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-auth.js";

  const firebaseConfig = {
    apiKey: "AIzaSyD0eeQSG-_qpSg4i0V8vMsbMp-mFa9fz6A",
    authDomain: "todo-web-c2500.firebaseapp.com",
    projectId: "todo-web-c2500",
    storageBucket: "todo-web-c2500.appspot.com",
    messagingSenderId: "341838122470",
    appId: "1:341838122470:web:a771493442dc6839631a27",
    measurementId: "G-WDH5GX9P5K"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);

const button = document.getElementById("submit");
button.addEventListener("click", handleLogin);

function handleLogin(event) {
  event.preventDefault();
  console.log("Button clicked, handling login");

  // Get email and password values here
  var emailvalue = document.getElementById("email").value;
  var pasvalue = document.getElementById("password").value;

  createUserWithEmailAndPassword(auth, emailvalue, pasvalue)
    .then((userCredential) => {
      // Signed in
      console.log("User created:", userCredential.user);
    })
    .catch((error) => {
      console.error("Error signing up:", error);
    });
    var emailvalue = emailvalue.value = "";
}
