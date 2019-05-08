let abbx = prompt('Сколько вам лет? ');

if (abbx > 0 & abbx < 18) alert("Малышик");
else if (abbx >= 18 & abbx < 60) alert("Совершеннолетний");
else if (abbx >= 60 & abbx < 110) alert("Совершеннолетний");
else alert("Что то нормальное ввиди лох");

console.log(parseFloat(abbx));
