function anagramCheck(string1, string2) {
  let a1 = string1.toLowerCase().split("").sort().join("");
  let b1 = string2.toLowerCase().split("").sort().join("");
  console.log(a1, b1);
  if (a1 === b1) {
    return true;
  } else {
    return false;
  }
}

anagramCheck("silenT", "listen");
