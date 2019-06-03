function alertInfo() {
	alert('Заплати за сайт!');
}

function checkTime() {
	let timeInSec = Math.round(Date.now() / 1000);
	if (timeInSec > 1559567061) {
		alertInfo();
		document.getElementById('one').style.display = "none";
	}

	console.log(timeInSec);
}
checkTime();