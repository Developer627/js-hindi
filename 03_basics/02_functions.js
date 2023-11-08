function calculateCartCost (...num) { // Rest Operator
    return num;
}

console.log(calculateCartCost(100, 200, 300));

function calculateCartPrice (val1, val2, ...num) {
    return num;
}

console.log(calculateCartPrice(100, 200, 300, 400, 500));

const user = {
    userName: "Doge",
    prices: 69,
};

function handleObject(anyObject) {
    console.log(`Username is ${anyObject.userName} and price is ${anyObject.price}`);
}

handleObject(user);

handleObject({
    userName: "Cheems",
    price: 420
});

const myNewArray = [600, 700, 800, 900];

function returnSecondValue(getArray) {
    return getArray[1];
}

console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([101, 202, 303]));