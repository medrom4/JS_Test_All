function plus() {
	let num1, num2, result;

	num1 = document.getElementById('n1').value;
	num1 = parseInt(num1);

	num2 = document.getElementById('n2').value;
	num2 = parseInt(num2);

	result = num1 + num2;

	document.getElementById('out').innerHTML = 'Результат: ' + result;
}

function minus() {
	let num1, num2, result;

	num1 = document.getElementById('n1').value;
	num1 = parseInt(num1);

	num2 = document.getElementById('n2').value;
	num2 = parseInt(num2);

	result = num1 - num2;

	document.getElementById('out').innerHTML = 'Результат: ' + result;
}

function umnojenie() {
	let num1, num2, result;

	num1 = document.getElementById('n1').value;
	num1 = parseInt(num1);

	num2 = document.getElementById('n2').value;
	num2 = parseInt(num2);

	result = num1 * num2;

	document.getElementById('out').innerHTML = 'Результат: ' + result;
}

function delenie() {
	let num1, num2, result;

	num1 = document.getElementById('n1').value;
	num1 = parseInt(num1);

	num2 = document.getElementById('n2').value;
	num2 = parseInt(num2);

	result = num1 / num2;

	document.getElementById('out').innerHTML = 'Результат: ' + result;
}
