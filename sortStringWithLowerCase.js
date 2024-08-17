let str = "WhatIsTheTiME";
let arr2 = str.split("");

let sort = arr2.sort((a, b) => a.localeCompare(b)).join("");

console.log(sort);
