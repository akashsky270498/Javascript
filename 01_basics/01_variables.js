const accountId = 1234;
let accountEmail = "peter@gmail.com";
var accountName = "Peter Parker";
accountState = "Missigun";
let accountCity;
// const accountCountry;  "const must be initialized"
var accountRole;

// accountId = 5678  //"cannot reassigned value in const"
accountEmail = "adam@gmail.com"; // can be reassigned
accountName = "Adam Gilchrist"; // can be reassigned
accountState = "Queensland"; // can be reassigned

console.table([
  accountId,
  accountEmail,
  accountName,
  accountState,
  accountCity,
  accountRole,
]);

/*
┌─────────┬──────────────────┐
│ (index) │ Values           │
├─────────┼──────────────────┤
│ 0       │ 1234             │
│ 1       │ 'adam@gmail.com' │
│ 2       │ 'Adam Gilchrist' │
│ 3       │ 'Queensland'     │
│ 4       │ undefined        │
│ 5       │ undefined        │
└─────────┴──────────────────┘
*/
