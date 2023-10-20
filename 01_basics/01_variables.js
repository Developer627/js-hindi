const accountId = 123;
let accountEmail = "cheems@google.com";
var accountPassword = "12345";
accountCity = "Noida";
let accountState;

// accountId = 2; // not allowed

accountEmail = "hc@hc.com";
accountPassword = "21212121";
accountCity = "Agra";

// console.log(accountId);

/*
Prefer not to use var
because of issue in block scope and functional scope
*/
 
console.table([accountId, accountEmail, accountPassword, accountCity, accountState]);