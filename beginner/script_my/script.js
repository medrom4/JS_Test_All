var p = document.getElementsByTagName('p');
var one = document.getElementsByClassName('one');
console.log(p);

for (var i = 0; i < p.length; i++) {
	p[i].onclick = f1;
}

function f1() {
	console.log(this);
	this.style.border = '1px solid #000';
}

for (var i = 0; i < one.length; i++) {
	one[i].onclick = f2;
}

function f2() {
	this.style.fontWeight = 'bold';
}
