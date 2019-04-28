function summa(a, b) {
	a = a || 12;
	b = b || 18;
	alert(a + b)
//		return (a + b);
}

//console.log(summa(3));

document.getElementById('b1').onclick = () => {
	summa();
}
