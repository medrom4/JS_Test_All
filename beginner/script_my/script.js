let a = [1, -2, 3, -4, 5, -6, 7, 8, 9, 10, -14, -9];

//let c = arrayOne.map(function(x) { // map
//	return x*3;
//});
//console.log(c);

let b = [];
for (let i = 0; i < a.length; i++) {
	if (a[i] > 0) b.push(a[i]);
}
console.log(b);

let c = a.filter(function (x, index) {
	return x < 0 & index % 3 == 0;
});
console.log(c);
