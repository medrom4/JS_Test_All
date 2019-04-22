function f1() {
	let oneBl = document.getElementById('out');
	let oneB2 = document.getElementById('out1');

	//	let num1 = document.getElementById('n1').value;
	//	num1 = parseInt(num1);

	let i = 0;

	while (i < 50) {
		oneBl.innerHTML += i + ' ';
		i++;
	}

	let j = 100;

	do {
		oneB2.innerHTML += j + ' ';
		j -= 2;
	}
	while (j > 0);
}
