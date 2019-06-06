$(document).ready(function () {

	/* настройки */
	let gemSize = 64; // размер гема
	let gemClass = "gem"; // класс элементов-гемов
	let gemIdPrefix = "gem"; // префикс для идентификаторов
	let numRows = 6; // количество рядов
	let numCols = 7; // количество колонок
	let jewels = new Array(); // двумерный массив гемов на поле
	let gameState = "pick"; // текущее состояние поля - ожидание выбора гема

	/* цвета гемов */
	let bgColors = new Array(
		"magenta",
		"mediumblue",
		"yellow",
		"lime",
		"cyan",
		"orange",
		"crimson",
		"gray"
	);

	/* создание поля */
	$("body")
		.append('<div id = "gamefield"></div>')
		.css({
			"background-color": "black",
			"margin": "0"
		});
	$("#gamefield")
		.css({
			"background-color": "#000000",
			"position": "relative",
			"width": (numCols * gemSize) + "px",
			"height": (numRows * gemSize) + "px"
		});

	/* создание сетки поля */
	for (i = 0; i < numRows; i++) {
		jewels[i] = new Array();
		for (j = 0; j < numCols; j++) {
			jewels[i][j] = -1;
		}
	}

	/* генерация исходного набора гемов */
	for (i = 0; i < numRows; i++) {
		for (j = 0; j < numCols; j++) {

			jewels[i][j] = Math.floor(Math.random() * 8);

			$('#gamefield').append('<div class="' + gemClass + '" id = "' + gemIdPrefix + '_' + i + '_' + j + '"></div>');

			$("#" + gemIdPrefix + '_' + i + '_' + j).css({
				"top": (i * gemSize) + 4 + "px",
				"left": (j * gemSize) + 4 + "px",
				"width": "54px",
				"height": "54px",
				"position": "absolute",
				"border": "1px solid white",
				"cursor": "pointer",
				"background-color": bgColors[jewels[i][j]]
			});
		}
	}






});