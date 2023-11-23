// if

// <, >, <=, >=, ==, ===, !=, !==

const isUserLoggedIn = true;

// if (2 == "2") {
//     console.log("excuted");
// }

// if (2 === "2") {
//     console.log("excuted");
// }

// if (2 == "2") {
//     console.log("excuted");
// }

const temperature = 41;

// if ( temperature === 40 ) {
//     console.log("less than 50");
// } else {
//     console.log("temperature is greater than 50");
// }

const score = 200;

// if (score > 100) {
//     const power = "fly";
//     console.log(`User power: ${power}`);
// }
// console.log(`User power: ${power}`);

// Short hand notation

const balance = 1000;

// implicit scope
// if (balance > 500) console.log("test"), console.log("test 2"); // Wrong practice

// if (balance < 500) {
//     console.log("less than");
// } else if (balance < 750) {
//     console.log("less than 750");
// } else if (balance < 900) {
//     console.log("less than 900");
// } else {
//     console.log("less than 1200");
// }

const userLoggedIn = true;
const debitCard = true;
const loggedInFromGoogle = false;
const loogedInFromEmail = true;

if (userLoggedIn && debitCard) {
    console.log("Allow to buy courses");
}

if (loggedInFromGoogle || loogedInFromEmail) {
    console.log("User logged in");
}