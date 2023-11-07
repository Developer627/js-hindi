const user = new Object();

user.id = "123abc";
user.name = "Sammy";
user.isLoggedIn = false;

// console.log(user);

const regularUser = {
    email: "someone@gmail.com",
    fullname: {
        userfullname: {
            firstname: "Vidhayak",
            lastname: "Ji",
        }
    }
}

// console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {
    1: "a",
    2: "b",
};

const obj2 = {
    3: "c",
    4: "d",
};

const obj3 = {
    5: "e",
    6: "f",
};

// const obj4 = { obj1, obj2, obj3 };

// const obj4 = Object.assign({}, obj1, obj2, obj3);

const obj4 = {...obj1, ...obj2, ...obj3};

// console.log(obj4);

const users = [
    {
        id: 1,
        email: "c@gmail.com",
    },
    {
        id: 1,
        email: "c@gmail.com",
    },
    {
        id: 1,
        email: "c@gmail.com",
    },
]

// console.log(users[1].email);

console.log(user);

console.log(Object.keys(user));
console.log(Object.values(user));
console.log(Object.entries(user));

console.log(user.hasOwnProperty("isLoggedIn"));
console.log(user.hasOwnProperty("isLogged"));