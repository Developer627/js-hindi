// Primitive

// 7 types: String, Number, Boolean, Null, Undefined, Symbol, BigInt

const score = 100;
const scoreValue = 100.3;

const isLoggedIn = false;
const outsideTemp = null;
let userEmail;

const id = Symbol('123');
const anotherId = Symbol('123');

// console.log(id);
// console.log(anotherId);
// console.log(id === anotherId);


// const BigNumber = 2389472309472089372935723423423024234n;

// Reference (Non Primitive)

// Array, Objects, Functions

const heros = ["Shaktimaan", "Naagraj", "Doga"];

let myObj = {
    name: "Cheems",
    age: 69,
};

const myFunction = function() {
    console.log("Hemllo Worlmd!");
}

// console.log("score: " + typeof(score));
// console.log("scoreValue: " + typeof(scoreValue));
// console.log("isLoggedIn: " + typeof(isLoggedIn));
// console.log("outsideTemp: " + typeof(outsideTemp));
// console.log("userEmail: " + typeof(userEmail));
// console.log("id: " + typeof(id));
// console.log("anotherId: " + typeof(anotherId));
// console.log("heros: " + typeof(heros));
// console.log("myObj: " + typeof(myObj));
// console.log("myFunction: " + typeof(myFunction));


// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Stack (Primitive) , Heap (Non-Primitive)

let myYoutubeName = "Cheems";

let anotherName = myYoutubeName;
anotherName = "Doge";

console.log(myYoutubeName);
console.log(anotherName);


let userOne = {
    email: "doge@cheems.com",
    upi: "doge@ybl",
};

let userTwo = userOne;

userTwo.email = "cheems@doge.com"

console.log(userOne.email);
console.log(userTwo.email);