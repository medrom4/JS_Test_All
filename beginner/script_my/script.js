var block = document.getElementById('one');

//block.onclick = function () {
//    this.style.background = 'black';
//    this.onclick = null;
////}

//block.ondblclick = function () {
//    this.style.background = 'green';
//}

// мышь правой кнопкой на элемент
/////////////////////////
//block.oncontextmenu = function () {
//    this.style.background = 'red';
//    return false;
//}

// мышь входит в элемент
/////////////////////////
//block.onmouseenter = function() {
//    console.log("GOOOOOD");
//    this.style.background = 'gold';
//}

// мышь уходит с элемента
/////////////////////////
//block.onmouseleave = function() {
//    this.style.background = '#666';
//    console.log("NOOOOOD");
//}


var a = 0;

//block.onmousemove = function () {
//    a++;
//    this.style.width = 100 + a + 'px';
//}

// нажимаем и держим кнопку мыши(любую)
block.onmousedown = function (event) {
    this.style.background = 'cyan';
    console.log(event.button);
}

block.onmouseup = function() {
    this.style.background = 'pink';
    console.log(event.button);
}


