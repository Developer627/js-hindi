function one () {
    const username = "Vidhayak";

    function two () {
        const website = "YouTube";
        console.log(username);
    }

    // console.log(website);

    two()
}

one();

if (true) {
    const username = "Doge";
    if (username === "Doge") {
        const website = " Cheems";
        console.log(username + website);
    }
    
    // console.log(website);
}
// console.log(username);

// ++++++++++++++++++++++++++++++++ Interesting ++++++++++++++++++++++++++++++++

console.log(addOne(5)); // Functions can also be call before defining

function addOne (numOne) {
    return numOne + 1;
}


// console.log(addTwo(5)); // This will generate error

const addTwo = function (numTwo) {
    return numTwo + 2;
}

console.log(addTwo(5)); 
