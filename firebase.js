// Initialize Firebase
console.log("first")
		var config = {
			apiKey: "AIzaSyCz9H9V7JMYySgoJ2mbcbU1-7io4WUr1So"
			, authDomain: "feu16-3e88e.firebaseapp.com"
			, databaseURL: "https://feu16-3e88e.firebaseio.com"
			, storageBucket: "feu16-3e88e.appspot.com"
			, messagingSenderId: "78285945611"
		};
		console.log("second");
		firebase.initializeApp(config);
		// Ett objekt för att hantera GitHub-autentisering
		let provider = new firebase.auth.GithubAuthProvider();
		// Skapa ett Promise som visar ett popup-fönster
		// Obs! Kontrollera att fönstret inte blockeras av en ad blocker
		firebase.auth().signInWithPopup(provider).then(function (result) {
			// Om autentisering lyckas, så finns användarinfo i user
			Console.log("Lyckades")
			let user = result.user;
		})
		.catch(function(error) {
   console.log(error);
		});