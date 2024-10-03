let str = "WhatIsTheTiME";

let sort = [...str].sort((a, b) => a.localeCompare(b)).join("");

console.log(sort);

function sortString(str) {
  function caseSensitive(a, b) {
    a = a.toUpperCase(); // a=a.toLowerCase() to make it case sensitive both methods u can use
    b = b.toUpperCase(); // b = b.toLowerCase()
    if (a < b) {
      return -1;
    } else if (a > b) {
      return 1;
    } else {
      return 0;
    }
  }

  return [...str].sort(caseSensitive).join("");
}

console.log(sortString("WhatIsTheTiME"));
