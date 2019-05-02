window.onload = () => {
	var scrolled;
	var timer;

	document.getElementById('top').onclick = () => {
		scrolled = window.pageYOffset;

		//		window.scrollTo(0, 0);
		scrollToTop();
	}

	function scrollToTop() {
		if (scrolled > 0) {
			window.scrollTo(0, scrolled);
			scrolled -= 300; // 100 - скорость прокрутки

			timer = setTimeout(scrollToTop, 100);
		} else {
			clearTimeout(0, 0);
			window.scrollTo(0, 0);
		}
	}
}
