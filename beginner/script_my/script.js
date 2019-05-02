var sdvig = 0;
var test = document.getElementById('test');
var timer;

function move() {
    test.style.marginLeft = sdvig + 'px';
    sdvig += 10;
    timer = setTimeout(move, 50);
}
//move();

//var tr = setInterval(move, 50);

document.getElementById('stop').onclick = function () {
    //    clearInterval(tr);
    clearTimeout(timer);
}

//setTimeout(move, 3000);

var a = 10;

function obr() {
    document.getElementById('out').innerHTML = a;
    a--;
    if (a == -1) {
        clearTimeout(timer);
    } else {
        timer = setTimeout(obr, 1000);
    }
}

obr();
