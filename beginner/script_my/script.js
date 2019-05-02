//document.onkeypress = (event) => {
//    console.log(event);
//    
//    if(event.shiftKey) {
//        console.log('Нажата клавиша Shift');
//    }
//}

document.getElementById('test').onkeypress = function (event) {
    //    console.log(event);

    if (event.keyCode < 48 || event.keyCode > 57) {
        console.log("Воодите цыфры!");
        return false;
    }
}
