function sayMyName() {
    console.log("H");
    console.log("E");
    console.log("I");
    console.log("S");
    console.log("E");
    console.log("N");
    console.log("B");
    console.log("E");
    console.log("R");
    console.log("G");
}

// sayMyName();

// function addTwoNumbers(number1, number2) {
//     console.log(number1 + number2);
// }

function addTwoNumbers(number1, number2) {
    // let add = number1 + number2;
    // return add;

    return number1 + number2;
}

const result = addTwoNumbers(3, 5);

console.log("Result: ", result);

function loginUserMessage (username = "Sam") {
    // if (username === undefined) {
    //     console.log("Please enter a username");
    //     return;
    // }
    if (!username) {
        console.log("Please enter a username");
        return;
    }
    return `${username} just logged in`;
}

const name = loginUserMessage("Doge");
console.log(name);

console.log(loginUserMessage("Doge"));
console.log(loginUserMessage(""));
console.log(loginUserMessage());
