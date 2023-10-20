let score = undefined;

// console.log(typeof score);
// console.log(typeof(score));

let valueInNumber = Number(score);

// console.log(typeof(valueInNumber));
// console.log(valueInNumber);

// "33" => 33
// "33abc" => NaN => Not a Number
// true => 1; false => 0

let isLoggedin = "doge";

let booleanisLoggedin = Boolean(isLoggedin);
// console.log(booleanisLoggedin);

// 1 => true; 0 => false
// "" => false
// "doge" => true

let someNumner = 33;

let stringNumber = String(someNumner);
// console.log(stringNumber);
// console.log(typeof(stringNumber));

// ******************** Operations ********************

let value = 3;
let negValue = -value;
// console.log(negValue);

// console.log(2+2); // => 4
// console.log(2-2); // => 0
// console.log(2*2); // => 4
// console.log(2**3); // => 8
// console.log(2/3); // => 0.6666666666666666
// console.log(2%2); // => 0

let str1 = "hello";
let str2 = " cheems";

let str3 = str1 + str2;
// console.log(str3);

// console.log("1" + 2); // => 12
// console.log(1 + "2"); // => 12
// console.log("1" + 2 + 2); // => 122
// console.log(1 + 2 + "2"); // => 32 

// console.log((3 + 4) * 5 % 3);  // => 2 Not a good way to evaluate

// console.log(true); // => true
// console.log(+true); // => 1 - Not a good way/complicated code
// // console.log(true+); // This will generate error - Not a good way/complicated code
// console.log(+""); // => 0 - Not a good way/complicated code

let num1, num2, num3;

num1 = num2 = num3 = 2 + 2;

let gameCounter = 100;
gameCounter++;
++gameCounter;
console.log(gameCounter);

// Conversion link: https://tc39.es/ecma262/#sec-abstract-operations
// Prefix & Postfix: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Increment