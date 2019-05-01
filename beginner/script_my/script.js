document.onmousemove = function () {
    document.getElementsByTagName('body')[0].insertAdjacentHTML('beforeEnd', '<img id="cat" src="img/smilecat.png" alt="">');

    var cat = document.getElementById('cat');
    cat.style.position = 'fixed';

    document.onmousemove = function (event) {
        cat.style.left = event.clientX + 10 + 'px';
        cat.style.top = event.clientY + 10 + 'px';
    }
}
