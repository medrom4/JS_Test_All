window.onload = function () {

	document.getElementById('param-1').oninput = function () {
		console.log(this.value);
		document.getElementById('password-length').innerHTML = this.value;
	}

}
