// block context
let a = 1;
const c = 2;
{
    let a = 4,
        c = 4;
    console.log(a);
    console.log(c);
}
console.log(a);
console.log(c);

// why we should avoid var
for (var i = 0; i < 2; i++) {}
console.log(i);

// IIFE - immediate invoked function expression
(function (val) {
    console.log(val);
})(5);
