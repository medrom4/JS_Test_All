var number = Math.floor(10 * Math.random()) + 1;
console.log(number);
var count = 3;

document.getElementById('check').onclick = () => {
    if (count > 0) {
        var usernum = document.getElementById('mynum').value;
        usernum = parseInt(usernum);
        var divOtv = document.getElementById('out');

        if (usernum == number) {
            divOtv.innerHTML = "Угадал!";
            setTimeout('location.reload()', 2000);
        } else if (usernum < number) {
            divOtv.innerHTML = "Больше!";
        } else {
            divOtv.innerHTML = "Меньше!";
        }

        document.getElementById('count').innerHTML = 'Количество попыток: ' + count + '.';
        count -= 1;
    } else {
        alert('Попытки закончены, вы проиграли. Страница перезагрузится.');
        location.reload();
    }
}
