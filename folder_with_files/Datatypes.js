//Data type in JS


//Number

let n = 777;
n = 12.777;

console.log(n);

//String

let str = "Hello JS";
let str2 = "This world is beautiful";

console.log(str2);

let name = "John";

// embed a variable
console.log(`Hello, ${name}!`); // Hello, John!

// embed an expression
console.log(`the result is ${1 + 2}`); // the result is 3

//Boolean

let nameFieldChecked = true; // yes, name field is checked
let ageFieldChecked = false; // no, age field is not checked

let isGreater = 4 > 1;

console.log(isGreater); // true (the comparison result is "yes")

//Null

let age = null;

console.log(age);

//Undefined

let age;

console.log(age); // shows "undefined"

//Type Of operator

typeof undefined; // "undefined"

typeof 0; // "number"

typeof 10n; // "bigint"

typeof true; // "boolean"

typeof "foo"; // "string"

typeof Symbol("id"); // "symbol"

typeof Math; // "object"  (1)

typeof null; // "object"  (2)

typeof alert; // "function"  (3)

//Objects
