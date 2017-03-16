
script src="https://www.gstatic.com/firebasejs/3.7.2/firebase.js"

  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyCz9H9V7JMYySgoJ2mbcbU1-7io4WUr1So",
    authDomain: "feu16-3e88e.firebaseapp.com",
    databaseURL: "https://feu16-3e88e.firebaseio.com",
    storageBucket: "feu16-3e88e.appspot.com",
    messagingSenderId: "78285945611"
  };
  firebase.initializeApp(config);



// Ett objekt för att hantera GitHub-autentisering
let provider = new firebase.auth.GithubAuthProvider();
// Skapa ett Promise som visar ett popup-fönster
// Obs! Kontrollera att fönstret inte blockeras av en ad blocker
firebase.auth().signInWithPopup(provider)
.then(function(result) {
    // Om autentisering lyckas, så finns användarinfo i user
    let user = result.user;
});
