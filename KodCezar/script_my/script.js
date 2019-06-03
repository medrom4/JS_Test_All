//шифруем
document.getElementById('in').oninput = function () {
	let help = document.getElementById('help');
	let vivod = document.getElementById('out');
	const offset = 3;

	/* 	help.innerHTML = String.fromCharCode(2323); */

	let str = this.value;

	let out = '';
	for (let i = 0; i < str.length; i++) {
		let code = str.charCodeAt(i);
		code += offset;
		out += String.fromCharCode(code);
	}
	vivod.innerHTML = out;
}

document.getElementById('out2').oninput = function () {
	let vivod = document.getElementById('out3');

	const offset = 3;
	let str = this.value;
	let out = '';
	for (let i = 0; i < str.length; i++) {
		let code = str.charCodeAt(i);
		code -= offset;
		out += String.fromCharCode(code);
	}
	vivod.innerHTML = out;
}