var str = '';

//document.getElementById('test').onkeypress = function (event) {
//    console.log(event);
//    str += event.key;
//    console.log(str);
//
//    this.value += String.fromCharCode(getRandom(65, 122));
//
//    return false; // пустая строка при вводе пороля
//}
//
//function getRandom(min, max) {
//    return Math.floor(Math.random() * (max - min)) + min;
//}


/////////////////////////////////////////////////////////////////
/////////////////////ЗВЕЗДЫ КАК В ПАРОЛЕ/////////////////////////
/////////////////////////////////////////////////////////////////


var str = '';

document.getElementById('test').onkeypress = function (event) {
    console.log(event);
    str += event.key;
    console.log(str);

    this.value += String.fromCharCode(42);

    return false; // пустая строка при вводе пороля
}
