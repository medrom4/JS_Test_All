document.getElementById('check').onclick = function () {
	let age = document.getElementById('age').value;
	age = parseInt(age);

	if (age >= 0 && age < 3) alert("Ваша надбавка - 0%");
	else if (age >= 3 && age < 10) alert("Ваша надбавка - 10%");
	else if (age >= 10 && age < 20) alert("Ваша надбавка - 20%");
	else if (age >= 20 && age < 50) alert("Ваша надбавка - 25%");
	else alert("Введите корректные данные");
}