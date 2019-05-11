//function onClick() {
//    console.log('ckick');
//}
//document.querySelector('#one').onclick = onClick;

document.onclick = function (event) {
    if (event.target.id == 'one') console.log('Кликнули по "<div> - one"');
}

document.querySelector('.two').onclick = function () {
    console.log('Кликнули по "<div> - two"');
}

document.querySelector('.three').onclick = function () {
    //    console.log('Кликнули по "<div> - three"');
    this.style.display = 'none';
}
