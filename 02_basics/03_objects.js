// Singleton
// Object.create -> constructor method -> creates Singleton Object

// Object Literal -> does not creates Singleton Object
const mySym = Symbol("key1");

const jsUser = {
    name: "Cheems",
    "full name": "Vidhyak Ji",
    [mySym]: "mykey1",
    age: 69,
    location: "Dogepur",
    email: "cheems@doge.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"],
};

// console.log(jsUser.email);
// console.log(jsUser["email"]);
// console.log(jsUser["full name"]);
// console.log(jsUser[mySym]);

jsUser.email = "cheems@patgtp.com";
// Object.freeze(mySym);
jsUser.email = "doge@patgtp.com";
// console.log(jsUser);

jsUser.greeting = function() {
    console.log("Hemloo JS User");
}

jsUser.greetingTwo = function() {
    console.log(`Hemloo JS User, ${this.name}`);
}

console.log(jsUser.greeting());
console.log(jsUser.greetingTwo());