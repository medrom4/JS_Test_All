var arr2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
var arr3 = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j'];
var arr4 = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'];
var arr5 = ['!', '@', '#', '$', '%', '^', '&', '*'];

document.getElementById('param-1').oninput = function () {
	// ползунок - длинна массива
	document.getElementById('password-length').innerHTML = this.value;
}

//запуск при старте
generatePass();

document.getElementById('generator').onclick = generatePass;

function generatePass(event) {
	var result = [];
	if (document.getElementById('param-2').checked) {
		result = result.concat(arr2);
	}
	if (document.getElementById('param-3').checked) {
		result = result.concat(arr3);
	}
	if (document.getElementById('param-4').checked) {
		result = result.concat(arr4);
	}
	if (document.getElementById('param-5').checked) {
		result = result.concat(arr5);
	}
	result.sort(compareRandom);

	document.getElementById('out').innerHTML = '';
	for (var k = 0; k < 6; k++) {

		var pass = '';
		var passLength = parseInt(document.getElementById('param-1').value);
		for (var i = 0; i < passLength; i++) {
			pass += result[randomInteger(0, result.length - 1)];
			console.log(pass);
		}
		document.getElementById('out').innerHTML += '<div>' + pass + '</div>';
	}
}

function compareRandom(a, b) {
	return Math.random() - .5;
}

function randomInteger(min, max) {
	var rand = min - 0.5 + Math.random() * (max - min + 1);
	rand = Math.round(rand);
	return rand;
}
