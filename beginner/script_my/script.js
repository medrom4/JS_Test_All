let arr = [20, 4, -41, 54];

let a = arr.reduce(function (x, y) {
	console.log('первая переменная в функции: ' + x);
	console.log('вторая переменная в функции: ' + y);
	return x + y;
});

console.log(a);
