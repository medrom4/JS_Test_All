function out() {
	let block = document.getElementById('out');
	//	block.innerHTML += " - <div>текст должен добавиться!</div>"
	// .innerHTML - вставляет всё

	//	block.insertAdjacentHTML('afterEnd', ' вставляемый текст ');
	//beforeBegin - перед открывающимся тегом
	//afterBegin - после открывающего тега
	//beforeEnd - перед закрывающимся тегом
	//afterEnd - после закрывающего тега

	block.outerHTML += '<div class="one"> вставляемый текст </div>';

}
