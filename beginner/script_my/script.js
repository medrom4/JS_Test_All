let numberOne = 4;

function showTemp() {
	if (numberOne > 0) console.log('больше нуля!');
	else if (numberOne < 0) console.log('меньше нуля!');
	else console.log('равно нулю!');
}
showTemp();

function summa(a = 2, b = 19) {
	console.log(a + b);
	console.log('Температура воды сейчас: ' + numberOne);
	return a + b;
}
summa(2, 14);

console.log(3 * summa(2, 14));
