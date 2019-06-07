// Создание и заполнение поля

$(document).ready(function () {

	/* настройки */
	let gemSize = 64; // размер гема
	let gemClass = "gem"; // класс элементов-гемов
	let gemIdPrefix = "gem"; // префикс для идентификаторов
	let numRows = 6; // количество рядов
	let numCols = 7; // количество колонок
	let jewels = new Array(); // двумерный массив гемов на поле
	let gameState = "pick"; // текущее состояние поля - ожидание выбора гема

	let selectedRow = -1; // выбранный ряд
	let selectedCol = -1; // выбранный столбец
	let posX; // столбец второго выбранного гема
	let posY; // ряд второго выбранного гема

	let movingItems = 0; // количество передвигаемых в данный момент гемов

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

	/* добавляем маркер */
	$("body").append('<div id = "marker"></div>');

	$("#marker").css({
		"width": (gemSize - 10) + "px",
		"height": (gemSize - 10) + "px",
		"border": "5px solid white",
		"position": "absolute"
	}).hide();

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
			/*
			  если вновь созданная фишка составляет группу сбора с уже имеющимися,
			  заменить ее на новую
			*/
			do {
				jewels[i][j] = Math.floor(Math.random() * 8);
			} while (isStreak(i, j));

			$("#gamefield").append('<div class = "' + gemClass + '" id = "' + gemIdPrefix + '_' + i + '_' + j + '"></div>');
			$("#" + gemIdPrefix + "_" + i + "_" + j).css({
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

	/* отслеживание действий игрока */
	$("#gamefield").swipe({
		tap: tapHandler,
		swipe: swipeHandler,
		swipeStatus: swipeStatusHandler
	});

	function swipeStatusHandler(event, phase) {
		// начало свайпа
		if (phase == "start") {
			swipeStart = null;
			if ($(event.target).hasClass("gem")) {
				swipeStart = event.target;
			}
		}
	}

	function swipeHandler(event, direction) {
		// обработка движения
		if (swipeStart != null) {
			// фаза ожидания выбора гема
			if (gameState == "pick") {
				// гем, с которого начался свайп
				selectedRow = parseInt($(swipeStart).attr("id").split("_")[1]);
				selectedCol = parseInt($(swipeStart).attr("id").split("_")[2]);

				// второй гем в зависимости от направления свайпа
				switch (direction) {
					case "up":
						if (selectedRow > 0) {
							$("#marker").hide();
							gameState = "switch";
							posX = selectedCol;
							posY = selectedRow - 1;
							gemSwitch();
						}
						break;
					case "down":
						if (selectedRow < numRows - 1) {
							$("#marker").hide();
							gameState = "switch";
							posX = selectedCol;
							posY = selectedRow + 1;
							gemSwitch();
						}
						break;
					case "left":
						if (selectedCol > 0) {
							$("#marker").hide();
							gameState = "switch";
							posX = selectedCol - 1;
							posY = selectedRow;
							gemSwitch();
						}
						break;
					case "right":
						if (selectedCol < numRows - 1) {
							$("#marker").hide();
							gameState = "switch";
							posX = selectedCol + 1;
							posY = selectedRow;
							gemSwitch();
						}
						break;
				}
			}
		}
	}

	function tapHandler(event, target) {
		/* клик по гему */
		if ($(target).hasClass("gem")) {
			/* ожидается выбор гема */
			if (gameState == "pick") {
				// определить строку и столбец
				let row = parseInt($(target).attr("id").split("_")[1]);
				let col = parseInt($(target).attr("id").split("_")[2]);
				// выделить гем маркером
				$("#marker").show();
				$("#marker").css("top", row * gemSize).css("left", col * gemSize);

				// если ни один гем не выбран, сохранить позицию выбранного
				if (selectedRow == -1) {
					selectedRow = row;
					selectedCol = col;
				} else {
					/*
					    если какой-то гем уже выбран,
					    проверить, что тап был по соседнему гему и поменять их местами
					    иначе, просто выделить новый гем
					*/
					if ((Math.abs(selectedRow - row) == 1 && selectedCol == col) || (Math.abs(selectedCol - col) == 1 && selectedRow == row)) {
						$("#marker").hide();
						// переключить состояние игры
						gameState = "switch";
						// сохранить позицию второго выбранного гема
						posX = col;
						posY = row;
						// поменять их местами
						gemSwitch();
					} else {
						selectedRow = row;
						selectedCol = col;
					}
				}
			}
		}
	}


	function checkMoving() {
		movingItems--;
		// когда закончилась анимация последнего гема
		if (movingItems == 0) {
			// действуем в зависимости от состояния игры
			switch (gameState) {
				// после передвижения гемов проверяем поле на появление групп сбора
				case "switch":
				case "revert":
					// проверяем, появились ли группы сбора
					if (!isStreak(selectedRow, selectedCol) && !isStreak(posY, posX)) {
						// если групп сбора нет, нужно отменить совершенное движение
						// а если действие уже отменяется, то вернуться к исходному состоянию ожидания выбора
						if (gameState != "revert") {
							gameState = "revert";
							gemSwitch();
						} else {
							gameState = "pick";
							selectedRow = -1;
						}
					} else {
						// если группы сбора есть, нужно их удалить
						gameState = "remove";
						if (isStreak(selectedRow, selectedCol)) {
							removeGems(selectedRow, selectedCol);
						}
						if (isStreak(posY, posX)) {
							removeGems(posY, posX);
						}
						gemFade();
					}
					break;

					// после удаления нужно "уронить" оставшиеся гемы, чтобы заполнить пустоты
				case "remove":
					checkFalling();
					break;

					// когда все гемы опущены вниз, заполняем пустоты
				case "refill":
					placeNewGems();
					break;
			}
		}
	}

	function checkFalling() {
		let fellDown = 0;

		for (j = 0; j < numCols; j++) {
			for (i = numRows - 1; i > 0; i--) {
				if (jewels[i][j] == -1 && jewels[i - 1][j] >= 0) {
					$("#" + gemIdPrefix + "_" + (i - 1) + "_" + j)
						.addClass("fall")
						.attr("id", gemIdPrefix + "_" + i + "_" + j);
					jewels[i][j] = jewels[i - 1][j];
					jewels[i - 1][j] = -1;
					fellDown++;
				}
			}
		}
		$.each($(".fall"), function () {
			movingItems++;
			$(this).animate({
				top: "+=" + gemSize
			}, {
				duration: 100,
				complete: function () {
					$(this).removeClass("fall");
					checkMoving();
				}
			});
		});

		// если падать больше нечему, изменяем состояние игры
		if (fellDown == 0) {
			gameState = "refill";
			movingItems = 1;
			checkMoving();
		}
	}


	function gemSwitch() {
		let yOffset = selectedRow - posY;
		let xOffset = selectedCol - posX;

		$("#" + gemIdPrefix + "_" + selectedRow + "_" + selectedCol)
			.addClass("switch")
			.attr("dir", "-1");
		$("#" + gemIdPrefix + "_" + posY + "_" + posX)
			.addClass("switch")
			.attr("dir", "1");

		// анимировать свитч
		$.each($(".switch"), function () {
			movingItems++;
			$(this).animate({
				left: "+=" + xOffset * gemSize * $(this).attr("dir"),
				top: "+=" + yOffset * gemSize * $(this).attr("dir")
			}, {
				duration: 250,
				complete: function () {
					// после завершения анимации, проверить, доступен ли такой ход
					checkMoving();
				}
			}).removeClass("switch")
		});

		// поменять идентификаторы гемов
		$("#" + gemIdPrefix + "_" + selectedRow + "_" + selectedCol)
			.attr("id", "temp");
		$("#" + gemIdPrefix + "_" + posY + "_" + posX)
			.attr("id", gemIdPrefix + "_" + selectedRow + "_" + selectedCol);
		$("#temp")
			.attr("id", gemIdPrefix + "_" + posY + "_" + posX);

		// поменять гемы в сетке
		let temp = jewels[selectedRow][selectedCol];
		jewels[selectedRow][selectedCol] = jewels[posY][posX];
		jewels[posY][posX] = temp;
	}

	/* помечаем удаляемые гемы классом remove и убираем их из сетки */
	function removeGems(row, col) {
		let gemValue = jewels[row][col];
		let tmp = row;
		$("#" + gemIdPrefix + "_" + row + "_" + col).addClass("remove");
		if (isVerticalStreak(row, col)) {
			while (tmp > 0 && jewels[tmp - 1][col] == gemValue) {
				$("#" + gemIdPrefix + "_" + (tmp - 1) + "_" + col).addClass("remove");
				jewels[tmp - 1][col] = -1;
				tmp--;
			}
			tmp = row;
			while (tmp < numRows - 1 && jewels[tmp + 1][col] == gemValue) {
				$("#" + gemIdPrefix + "_" + (tmp + 1) + "_" + col).addClass("remove");
				jewels[tmp + 1][col] = -1;
				tmp++;
			}
		}
		if (isHorizontalStreak(row, col)) {
			tmp = col;
			while (tmp > 0 && jewels[row][tmp - 1] == gemValue) {
				$("#" + gemIdPrefix + "_" + row + "_" + (tmp - 1)).addClass("remove");
				jewels[row][tmp - 1] = -1;
				tmp--;
			}
			tmp = col;
			while (tmp < numCols - 1 && jewels[row][tmp + 1] == gemValue) {
				$("#" + gemIdPrefix + "_" + row + "_" + (tmp + 1)).addClass("remove");
				jewels[row][tmp + 1] = -1;
				tmp++;
			}
		}
		jewels[row][col] = -1;
	}

	/* удаляем гемы с поля */
	function gemFade() {
		$.each($(".remove"), function () {
			movingItems++;
			$(this).animate({
				opacity: 0
			}, {
				duration: 200,
				complete: function () {
					$(this).remove();

					// снова проверяем состояние поля
					checkMoving();
				}
			});
		});
	}

	function placeNewGems() {
		let gemsPlaced = 0;
		for (i = 0; i < numCols; i++) {
			if (jewels[0][i] == -1) {
				jewels[0][i] = Math.floor(Math.random() * 8);
				$("#gamefield")
					.append('<div class = "' + gemClass + '" id = "' + gemIdPrefix + '_0_' + i + '"></div>');
				$("#" + gemIdPrefix + "_0_" + i).css({
					"top": "4px",
					"left": (i * gemSize) + 4 + "px",
					"width": "54px",
					"height": "54px",
					"position": "absolute",
					"border": "1px solid white",
					"cursor": "pointer",
					"background-color": bgColors[jewels[0][i]]
				});
				gemsPlaced++;
			}
		}

		/* если появились новые гемы, проверить, нужно ли опустить что-то вниз */
		if (gemsPlaced) {
			gameState = "remove";
			checkFalling();
		} else {
			/* если новых гемов не появилось, проверяем поле на группы сбора */
			let combo = 0
			for (i = 0; i < numRows; i++) {
				for (j = 0; j < numCols; j++) {
					if (j <= numCols - 3 && jewels[i][j] == jewels[i][j + 1] && jewels[i][j] == jewels[i][j + 2]) {
						combo++;
						removeGems(i, j);
					}
					if (i <= numRows - 3 && jewels[i][j] == jewels[i + 1][j] && jewels[i][j] == jewels[i + 2][j]) {
						combo++;
						removeGems(i, j);
					}
				}
			}

			// удаляем найденные группы сбора
			if (combo > 0) {
				gameState = "remove";
				gemFade();
			} else { // или вновь запускаем цикл игры
				gameState = "pick";
				selectedRow = -1;
			}
		}
	}

	/* проверка на группы сбора */

	function isVerticalStreak(row, col) {
		let gemValue = jewels[row][col];
		let streak = 0;
		let tmp = row;
		while (tmp > 0 && jewels[tmp - 1][col] == gemValue) {
			streak++;
			tmp--;
		}
		tmp = row;
		while (tmp < numRows - 1 && jewels[tmp + 1][col] == gemValue) {
			streak++;
			tmp++;
		}
		return streak > 1
	}

	function isHorizontalStreak(row, col) {
		let gemValue = jewels[row][col];
		let streak = 0;
		let tmp = col;
		while (tmp > 0 && jewels[row][tmp - 1] == gemValue) {
			streak++;
			tmp--;
		}
		tmp = col;
		while (tmp < numCols - 1 && jewels[row][tmp + 1] == gemValue) {
			streak++;
			tmp++;
		}
		return streak > 1
	}

	function isStreak(row, col) {
		return isVerticalStreak(row, col) || isHorizontalStreak(row, col);
	}
});