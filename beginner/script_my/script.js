//function f1() {
//	let div = document.getElementById('one');
//	div.onclick = function () {
//		div.innerHTML += " - молодец";
//	}
//}
//f1();
//
//function f2() {
//	let div = document.getElementById('two');
//	div.onclick = function () {
//		div.innerHTML += " - молодец 2 часть";
//	}
//}
//f2();
//
//let con = document.querySelector('#three');
//
//function f3() {
//	con.onclick = function () {
//		con.innerHTML += ' молодец часть 3-я';
//	}
//}
//f3();
//
//con = document.querySelector('#foure');
//f3();

/////////////////////////////////////////////////
/////////////////////////////////////////////////
/////////////////////////////////////////////////

function f4(zzz) {
	let d = document.querySelector("#" + zzz);
	d.onclick = function () {
		d.innerHTML += " - всё получилось!";
	}
}
f4('one');
f4('three');
f4('two');
f4('foure');

/////////////////////////////////////////////////
/////////////////////////////////////////////////
/////////////////////////////////////////////////

function summa(a, b) {
	(a) ? a = a: a = 92;
	(b) ? b = b: b = 9;
	return a + b;
}

console.log(summa(2, 13));
console.log(summa());
