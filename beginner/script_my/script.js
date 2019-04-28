var goods = {

	"28292": {
		"name": "Банан",
		"cost": 30,
		"img": "https://cdn4.iconfinder.com/data/icons/materia-flat-fruits/24/027_045_banana_banan_plant_herb_fruit_food-256.png",
		"sclad": "да"
	},

	"28293": {
		"name": "Помидор",
		"cost": 12,
		"img": "https://cdn1.iconfinder.com/data/icons/Hooligans_Icons/250/Tomato.png",
		"sclad": "нет"
	}

};

console.log(goods);

var out = '';
for (var key in goods) {
	out += 'Название: ' + goods[key].name + '<br>' +
		'Цена: ' + goods[key].cost + '<br>' +
		'Картинка: ' + '<img src="' + goods[key].img + '">' + '<br>' +
		'Наличие на складе: ' + goods[key].sclad + '<br>' + '<hr>';
}

document.getElementById('out').innerHTML = out;
