let arr = [];
let arr1 = ['one', 'two', 23];
arr1[3] = 'privet medved';

//for (var i = 0; i < arr1.length; i++) {
//	document.getElementById('out').innerHTML += arr1[i] + '<br>';
//}

function masOut() {
	let p = document.getElementById('out');
	let str = '';

	for (var i = 0; i < arr1.length; i++) {
		str += i + ' -- ' + arr1[i] + '<br>';
	}
	p.innerHTML = str;
}
masOut();


function p1() {
	let i1 = document.getElementById('i1').value;
	arr1.push(i1);
	masOut();
}

function p2() {
	arr1.pop();
	masOut();
}
