var man = {
	"name": "Alex",
	"age": 67,
	"id": "2000123",
	"sex": "male",
	"year": function () {
		return 2019 - this.age;
	}
};

console.log(man.year());


///////////////////////////////
var m = {
	"mas": [5, 6, 34, 12, 45],
	"sum": function () {
		var sum = 0;
		for (var i = 0; i < this.mas.length; i++) {
			sum += this.mas[i];
		}
		return sum;
	}
}
console.log(m.sum());
