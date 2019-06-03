let result = prompt('Сколько Вам лет?', 15);


if (result >= 0 && result <= 17) alert('Доступ ЗАПРЕЩЁН!');
else if (result >= 18 && result <= 90) alert('Доступ разрешен');
else alert('ERRROR!! Введите реальный возраст!');