var radio = document.getElementsByName('prim');

for (var i = 0; i < radio.length; i++) {
    radio[i].onchange = testRadio;
}

function testRadio() {
    console.log(this.value);
}

document.getElementById('one').onclick = checkRadio;

function checkRadio() {
    var arr = document.getElementsByName('prim');
    for (var i = 0; i < arr.length; i++) {
        if (arr[i].checked) {
            console.log(arr[i].value);
            break;
        }
    }
}
