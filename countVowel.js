let name = "aeiou syam kumar";
let count = 0;
for (const c of name) {
  if (c == "a" || c == "e" || c == "i" || c == "o" || c == "u") {
    count += 1;
  }
}
console.log(count);

function vowelsAndConsonants(s) {
  let vowels = [];
  let consonants = [];
  for (let i = 0; i < s.length; i++) {
    if ("aeiou".indexOf(s[i]) >= 0) {
      vowels.push(s[i]);
    } else {
      consonants.push(s[i]);
    }
  }

  return { v: vowels, c: consonants };
}
console.log(vowelsAndConsonants("ibpbhixfiouhdljnjfflpapptrxgcomvn"));
