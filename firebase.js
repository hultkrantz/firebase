
window.addEventListener('load', function () {
	let namn = document.getElementById('inputNamn');
	let familj = document.getElementById('inputFamilj');
	let antal = document.getElementById('inputAntal');
	let färg = document.getElementById('inputFärg');
	let addButton = document.getElementById('addButton');
	let tableVisaDjur = document.getElementById('tableVisaDjur');
	addButton.addEventListener('click', function (event) {
		console.log('Klickat lägga till djur');
		firebase.database().ref('djur/' + namn.value).set({
			namn: namn.value
			, familj: familj.value
			, antal: antal.value
			, färg: färg.value
		})
	});
	firebase.database().ref('djur/').on('value', function (snapshot) {
		console.log('Första gången eller ändring i databasen');
		let data = snapshot.val();
		tableVisaDjur.innerHTML = '';
		for (let key in data) {
			let animal = data[key];
			console.log('data[key]=', data[key]);
			let tr = document.createElement('tr');
			tr.innerHTML = `<td>${animal.namn}</td> <td>${animal.familj}</td> <td>${animal.antal}</td> <td style="width: 50px; background-color: ${animal.färg};"></td>`;
			tableVisaDjur.appendChild(tr);
		}
	})
});