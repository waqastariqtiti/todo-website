import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-app.js";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-auth.js";

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
const provider = new GoogleAuthProvider();

// Add event listener to the submit button
document.addEventListener("DOMContentLoaded", () => {
  const submitButton = document.getElementById("submit");
  if (submitButton) {
    submitButton.addEventListener("click", handlesign);
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
