let mass = [3, -12];
let result = [];

if (mass[0] < mass[1]) {
	for (i = mass[0]; i <= mass[1]; i++) {
		result.push(i);
	}
} else {
	for (i = mass[0]; i >= mass[1]; i--) {
		result.push(i);
	}
}


console.log(result);