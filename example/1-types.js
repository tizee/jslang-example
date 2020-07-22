const log = console.log;

// Primitive types
log(typeof 123); // number
log(typeof "123"); // string
log(typeof true); // boolean
log(typeof undefined); // undefined
log(typeof null); // object for its representation in memory
log(undefined == null); // true
log(undefined === null); // false
log(typeof 1000n); // bigint
log(0n == 0); // true
log(0n === 0); // false

/*
 Number in JavaScript using IEEE754 double-percesion represntation.
 That's why 0.1 + 0.2 !== 0.3 
*/

log(0.1 + 0.2 === 0.3); // false
log(0.1 + 0.2 == 0.3); // false

function f1() {}
log(typeof f1); // function
const f2 = () => {};
log(typeof f2); // function
const obj = {};
log(typeof obj); // object

// All Wrapper types are Object type.
let a = new String("1");
let b = new Number("1");
let c = new Boolean("1");
log(typeof a);
log(typeof b);
log(typeof c);

// Primitive type need to create a temporary corresponding Wrapper to use method.
