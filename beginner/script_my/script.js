function plus() {
	let num1, num2, result;

	num1 = document.getElementById('n1').value;
	num1 = parseInt(num1);

	num2 = document.getElementById('n2').value;
	num2 = parseInt(num2);

	if (num1 > num2) {
		document.getElementById('out').innerHTML += ' первое число больше вторго';
		setTimeout("location.reload(true)", 2000);
	} else if (num1 == num2) {
		document.getElementById('out').innerHTML += ' числа одинаковые';
		setTimeout("location.reload(true)", 2000);
	} else {
		document.getElementById('out').innerHTML += ' второе число больше первого';
		setTimeout("location.reload(true)", 2000);
	}


}
