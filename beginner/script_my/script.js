let one = document.querySelector('#one');

console.log(one);

function myClick() {
    console.log('click');
    one.onclick = null;
    let divTwo = document.querySelector('#two');
    divTwo.onclick = funcTwo;    
}
one.onclick = myClick;

function funcTwo() {
    console.log('фторая функция выполнена!');
    let divThree = document.querySelector('#three');
    divThree.onclick = funcThree;
}

function funcThree() {
    console.log('Третья функция выполнена!');
}
