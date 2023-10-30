// Dates

let myDate = new Date();
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toISOString());
// console.log(myDate.toJSON());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toLocaleString());
// console.log(myDate.toLocaleTimeString());

// console.log(typeof(myDate));

let myCreatedDate = new Date(2023, 0, 23);
// console.log(myCreatedDate.toDateString());

let myAnotherDate = new Date(2023, 0, 23, 5, 3);
// console.log(myAnotherDate.toLocaleString());

let myOtherDate = new Date("2023-01-15");
// console.log(myOtherDate.toLocaleString());

let myNewDate = new Date("02-19-2023");
// console.log(myNewDate.toLocaleString());

let myTimeStamp = Date.now();
// console.log(myTimeStamp);
// console.log(myNewDate.getTime());
// console.log(Math.floor(Date.now()/1000));

let newDate = new Date();
// console.log(newDate);
// console.log(newDate.getMonth());
// console.log(newDate.getDay());

newDate.toLocaleString('default', {
    weekday: "long",
})