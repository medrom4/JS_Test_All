document.getElementById('check').onclick = function () {
	let login = document.getElementById('login').value;
	let password = document.getElementById('password').value;

	if (login == 'ivan' && password == '334455') alert("Приветствуем Вас!");
	else if (login == 'alex' && password == '777') alert("Приветствуем Вас!");
	else if (login == 'petr' && password == 'b5678') alert("Приветствуем Вас!");
	else alert("Вход запрещён!");
}