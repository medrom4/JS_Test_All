function cs2() {
    let c = -5;
    return function(){
        c++;
        console.log(c);
    }
}

let d = cs2();
d();
d();
d();
d();
d();
d();
