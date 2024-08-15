import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-app.js";
import {
  getAuth,
  createUserWithEmailAndPassword,
} from "https://www.gstatic.com/firebasejs/10.12.5/firebase-auth.js";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBNVgxFlfzjNniDeOWfNGtixO2pQncLm74",
  authDomain: "sign-up-60cb6.firebaseapp.com",
  projectId: "sign-up-60cb6",
  storageBucket: "sign-up-60cb6.appspot.com",
  messagingSenderId: "687730009137",
  appId: "1:687730009137:web:193c94ed0735b34fbc2110",
  measurementId: "G-ME1CNCRT16",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

document.addEventListener("DOMContentLoaded", (event) => {
  const submitButton = document.getElementById("submit");
  if (submitButton) {
    submitButton.addEventListener("click", handlesign);
  }
});

function handlesign() {
  const emailInput = document.getElementById("email");
  const passwordInput = document.getElementById("password");

  if (emailInput && passwordInput) {
    const emailvalue = emailInput.value;
    const passwordvalue = passwordInput.value;

    createUserWithEmailAndPassword(auth, emailvalue, passwordvalue)
      .then((userCredential) => {
        // Signed in
        console.log("User created:", userCredential.user);
        emailInput.value = ""; // Clear the input fields
        passwordInput.value = "";
      })
      .catch((error) => {
        console.error("Error signing up:", error);
        alert("Error signing up: " + error.message); // Display error to the user
      });
  } else {
    console.error("Email or password input is missing");
  }
}
