let today = new Date();
let dd = String(today.getDate()).padStart(2, "0");
let mm = String(today.getMonth() + 1).padStart(2, "0");
let yyyy = today.getFullYear();

today = mm + "/" + dd + "/" + yyyy;

console.log(today);
// convert date to another timezone
console.log(new Date().toLocaleString("en-GB", { timeZone: "UTC" }));
