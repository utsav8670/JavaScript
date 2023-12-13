const accountID = 1223
let accountEmail = "google@google.com"
var accountPassword = "19902"
/*
prefer not to use var
because of issue in block scope and functional scope
*/
accountCity = "jaipur"
let accountState;
// let accountEmail;
/*
connot assign variable with the same name with let keyword

*/

// accountID = 2 This will not allowed by javascript
accountEmail = "yt@google.com"
accountPassword = "123222"
accountCity = "rajasthan"

console.log(accountID);
console.log(accountEmail);
console.log(accountPassword);
console.log(accountCity);

console.table([accountEmail,accountPassword,accountCity,accountState])

