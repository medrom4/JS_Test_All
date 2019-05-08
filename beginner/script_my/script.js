let arr = document.getElementsByClassName('pclaass');
for (let i = 0; i < arr.length; i++) arr[i].style.color = 'red';

let arr2 = document.getElementsByClassName('clic');
for (let k = 0; k < arr2.length; k++) arr2[k].onclick = () => {
	alert('нажми ОК сука');
}

let arr3 = [1, 2, 3, 4, 5, -6, 7, 8, 9, 10, -14, -9];
let temperatyra = 0;
for (let j = 0; j < arr3.length; j++) temperatyra += arr3[j];
console.log(temperatyra / arr3.length);

console.log(Math.min.apply(null, arr3));
console.log(Math.max.apply(null, arr3));

console.log('------------------------');

let arr4 = [
	[1, 3, 5],
	[3, -7, 11],
	[2, -5, 6]
];

for (let z = 0; z < arr4.length; z++) {
	let temerTwo = 0;
	for (let go = 0; go < arr4[z].length; go++) {
		temerTwo += arr4[z][go];		
	}
	console.log(temerTwo / arr4[z].length);
}
