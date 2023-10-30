const score = 400;
// console.log(score);

const balance = new Number(100);
// console.log(balance);

// console.log(balance.toString().length);
// console.log(balance.toFixed(2));

const otherNumberOne = 23.8966;
// console.log(otherNumberOne.toPrecision(3))

const otherNumberTwo = 123.8966;
// console.log(otherNumberTwo.toPrecision(3))

const otherNumberThree = 1123.8966;
// console.log(otherNumberThree.toPrecision(3))

const otherNumberFour = 123.8966;
// console.log(otherNumberThree.toPrecision(4))

const hundred = 1000000;
// console.log(hundred.toLocaleString('en-IN'));

/*
Number.MAX_VALUE
1.7976931348623157e+308

Number.MIN_VALUE
5e-324

Number.MAX_SAFE_INTEGER
9007199254740991

Number.MIN_SAFE_INTEGER
-9007199254740991
*/

// ++++++++++++++++++++++++++++++++ Maths ++++++++++++++++++++++++++++++++

// console.log(Math);
// console.log(Math.abs(-4));
// console.log(Math.round(4.6));
// console.log(Math.ceil(4.2));
// console.log(Math.floor(4.9));
// console.log(Math.min(4, 3, 6, 8));
// console.log(Math.max(4, 3, 6, 8));

console.log(Math.random());
console.log((Math.random()*10) + 1);
console.log(Math.floor((Math.random()*10) + 1));

const min = 10;
const max = 20;

console.log(Math.floor(Math.random() * (max - min + 1)) + min);