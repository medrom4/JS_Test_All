(function () {
    if (localStorage.getItem('bgcolor') !== null) {
        var color = localStorage.getItem('bgcolor');
        document.getElementsByTagName('body')[0].style.background = color;
    }

    document.getElementById('green').onclick = () => {
        document.getElementsByTagName('body')[0].style.background = '#17A05D';
        localStorage.setItem('bgcolor', '#17A05D');
    }
    
    document.getElementById('red').onclick = () => {
        document.getElementsByTagName('body')[0].style.background = '#DD5145';
        localStorage.setItem('bgcolor', '#DD5145');
    }
})();
