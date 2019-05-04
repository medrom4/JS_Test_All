(() => {

    document.querySelector('#menu').onmouseover = menuShow;
    document.querySelector('#menu').onmouseout = menuHide;

    document.onkeydown = function (event) {
        if (event.code == 'Escape') menuHide();
        if (event.code == 'KeyM') menuShow();
    }

    function menuShow() {
        document.querySelector('#menu').style.left = 0;
    }

    function menuHide() {
        document.querySelector('#menu').style.left = '-235px';
    }
})();
