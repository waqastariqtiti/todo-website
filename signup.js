import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-app.js";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
} from "https://www.gstatic.com/firebasejs/10.13.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyD0eeQSG-_qpSg4i0V8vMsbMp-mFa9fz6A",
  authDomain: "todo-web-c2500.firebaseapp.com",
  projectId: "todo-web-c2500",
  storageBucket: "todo-web-c2500.appspot.com",
  messagingSenderId: "341838122470",
  appId: "1:341838122470:web:a771493442dc6839631a27",
  measurementId: "G-WDH5GX9P5K",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

// Add event listeners when the DOM is loaded
document.addEventListener("DOMContentLoaded", () => {
  const submitButton = document.getElementById("submit");
  const loginButton = document.getElementById("login");

  if (submitButton) {
    submitButton.addEventListener("click", handlesign);
  }

  if (loginButton) {
    loginButton.addEventListener("click", handleLogin);
  }
});

function handlesign(event) {
  event.preventDefault(); // Prevent the page from reloading

  // Get values from input fields
  const emailInput = document.getElementById("email");
  const userNameInput = document.getElementById("userName");
  const passwordInput = document.getElementById("password");

  // Check if input fields exist and are non-empty
  if (!emailInput || !userNameInput || !passwordInput) {
    console.error("One or more input fields are missing.");
    return;
  }

  const emailvalue = emailInput.value.trim();
  const userNamevalue = userNameInput.value.trim();
  const passwordvalue = passwordInput.value.trim();

  // Validation for empty input fields
  if (!emailvalue || !userNamevalue || !passwordvalue) {
    alert("Please fill in all fields.");
    return;
  }

  // Proceed with Google Sign-In
  signInWithPopup(auth, provider)
    .then((result) => {
      // Successful sign-in
      const user = result.user;
      console.log("User signed in:", user);
      // Clear input fields if needed
      emailInput.value = "";
      userNameInput.value = "";
      passwordInput.value = "";
    })
    .catch((error) => {
      // Handle errors here
      console.error("Error signing in:", error);
      alert("Error signing in: " + error.message);
    });
}

function handleLogin(event) {
  event.preventDefault(); // Prevent the page from reloading

  // Get values from input fields
  const emailValue = document.getElementById("email").value.trim();
  const passValue = document.getElementById("password").value.trim();

  // Validation for empty input fields
  if (!emailValue || !passValue) {
    alert("Please fill in all fields.");
    return;
  }

  createUserWithEmailAndPassword(auth, emailValue, passValue)
    .then((userCredential) => {
      // User created successfully
      console.log("User created:", userCredential.user);

      // Clear input fields
      document.getElementById("email").value = "";
      document.getElementById("password").value = "";
    })
    .catch((error) => {
      // Handle errors here
      console.error("Error signing up:", error);
      alert("Error signing up: " + error.message);
    });
}
