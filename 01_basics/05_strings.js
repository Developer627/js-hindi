const firstName = "Vidhayak";
const lastName = "Ji";
const repoCount = 50;

// console.log(firstName + lastName + repoCount); // Not a good way to write string

// console.log(`Hello my name is ${firstName} ${lastName} & my repo count is ${repoCount}`);

const gameName = new String('hemlloo-vidhayak-ji');

// console.log(gameName[0]);
// console.log(gameName.__proto__);

// console.log(gameName.length);
// console.log(gameName.toUpperCase());

// console.log(gameName.charAt(3));
// console.log(gameName.indexOf('o'));

// const newString = gameName.substring(0, 4);
// console.log(newString);

// const anotherString = gameName.slice(-6, 3);
// console.log(anotherString);

const newStringOne = "    Doge    "
// console.log(newStringOne);
// console.log(newStringOne.trim());

const url = "https://election.com/Vidhayak%20Ji";
// console.log(url);
// console.log(url.replace('%20', '-'));
// console.log(url.includes('Cheems')); // false
// console.log(url.includes('Vidhayak')); // true
// console.log(url.includes('vidhayak')); // false

console.log(gameName.split('-'));