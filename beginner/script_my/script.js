var m = {};
var n = {
	"one": 12,
	"hello": "world",
	"prim": 2000,
	"dooble key": 777
};

console.log(n["one"] + ' - ' + n.hello);


///////////////////////////////

var out = document.getElementById('out');

for (var key in n) {
	out.innerHTML += key + ' - ' + n[key] + '<br>';
}
