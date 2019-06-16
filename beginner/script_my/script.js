const days = 9;
const period = 3;
const workDayAmount = 200;
const weekendAmount = 100;

let total = 0;
let count = 1;

for (let i = 1; i <= days; i++) {
	if (count == period) {
		if (i % 6 == 0 || i % 7 == 0) total += weekendAmount;
		else total += workDayAmount;
		count = 0;
	}
	count++;
}

console.log(total);