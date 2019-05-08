let go = [1,2,3,4,5];
// добавление в конец массива
go.push(2);
console.log(go);

// удаление последнего из массива
go.pop(2);
console.log(go);


go.shift(); // удаление первого из массива
go.unshift('Hello'); // добавление первого из массива
console.log(go);

let all = 'hi, my name, Alexa!';
let cons = all.split(','); // разбивает строку на массив по запятой
console.log(cons);
let consTwo = cons.join('-'); // объединяет массив в строку с разделителем в скобках
console.log(consTwo);

let allTwoo = [2, 'heloo', 56, 3.14, 'gooo'];
let goThree = allTwoo.slice(1,4); // выборка массива
console.log(goThree);

let allTThree = [2, 'heloo', 56, 3.14, 'gooo'];
let [b,c] = allTThree;
console.log(b,c);