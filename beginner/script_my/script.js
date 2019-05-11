const foo = Object.freeze({
    'd': 33
});
console.log(foo.d);

foo.d = 44;
console.log(foo.d);
