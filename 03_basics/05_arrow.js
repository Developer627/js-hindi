const user = {
    username: "Doge",
    price: 99,

    welcomeMessage: function() {
        console.log(`${this.username}, welcome to website`);
        console.log(this);
    }
}

// user.welcomeMessage();
// user.username = "Cheems";
// user.welcomeMessage();

// console.log(this);

function chai () {
    let username = "Doge";
    console.log(this);
    // console.log(this.username); // output -> undefined
}

// chai();

const tea = function () {
    let username = "Cheems";
    console.log(this);
    // console.log(this.username); // output -> undefined
}

// tea();

const coffee = () => {
    let username = "Vidhayak";
    console.log(this);
    // console.log(this.username); // output -> undefined
}

// coffee();

const addTwo = (num1, num2) => {
    return num1 + num2;
}

console.log(addTwo(1, 2));

const addThree = (numOne, numtwo, numThree) => numOne + numtwo + numThree; // Implicit arrow function

console.log(addThree(3, 4, 5));

const addFour = (nOne, nTwo, nThree, nFour) => (nOne + nTwo + nThree + nFour);

console.log(addFour(6, 8, 7, 9));

const obj = () => ({username: "Fluffy"});

console.log(obj());