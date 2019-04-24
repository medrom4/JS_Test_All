document.getElementById('slider-left').onclick = sliderLeft;
var left = 0;

function sliderLeft() {
	let polosa = document.getElementById('polosa');
	left = left - 256;

	if (left < -768) {
		left = 0;
	}

	polosa.style.left = left + 'px';
}
