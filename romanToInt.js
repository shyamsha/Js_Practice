var romanToInt = function (s) {
  let roman = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  let result = 0;
  for (let i = 0; i < s.length; i++) {
    if (roman[s[i]] < roman[s[i + 1]]) {
      result = result - roman[s[i]];
    } else {
      result = result + roman[s[i]];
    }
  }
  return result;
};

let s = "I";
console.log(romanToInt(s));

// javascript code implementation

function integerToRoman(num) {
  let roman = new Map();
  roman.set(1, "I");
  roman.set(5, "V");
  roman.set(10, "X");
  roman.set(50, "L");
  roman.set(100, "C");
  roman.set(500, "D");
  roman.set(1000, "M");
  roman.set(5000, "G");
  roman.set(10000, "H");

  let tmp = Array.from(String(num));
  let numDigits = tmp.length;

  let res = [];
  for (let i = 0; i < numDigits; i++) {
    let src = tmp[i];
    let number = src.charCodeAt(0) - 48; // convert to integer
    let place = numDigits - 1 - i;
    let absolute = Math.pow(10, place);

    if (number == 9) {
      res.push(roman.get(absolute));
      res.push(roman.get((number + 1) * absolute));
    } else if (number >= 5) {
      res.push(roman.get(5 * absolute));

      let cnt = number - 5;
      while (cnt--) res.push(roman.get(absolute));
    } else {
      if (number >= 4) {
        res.push(roman.get(absolute));
        res.push(roman.get(5 * absolute));
      } else {
        let cnt = number;
        while (cnt--) res.push(roman.get(absolute));
      }
    }
  }
  return res;
}

let ans = integerToRoman(6).join("");
console.log(ans);

// JavaScript Program for above approach

// Function to calculate roman equivalent
function intToRoman1(num) {
  // Initialize the ans string
  let ans = "";
  // calculate the roman numbers
  while (num != 0) {
    if (num >= 1000) {
      ans += "M";
      num -= 1000;
    }
    //check for all the corner cases like 900,400,90,40,9,4 etc.
    else if (num >= 900 && num < 1000) {
      ans += "CM";
      num -= 900;
    } else if (num >= 500 && num < 900) {
      ans += "D";
      num -= 500;
    } else if (num >= 400 && num < 500) {
      ans += "CD";
      num -= 400;
    } else if (num >= 100 && num < 400) {
      ans += "C";
      num -= 100;
    } else if (num >= 90 && num < 100) {
      ans += "XC";
      num -= 90;
    } else if (num >= 50 && num < 90) {
      ans += "L";
      num -= 50;
    } else if (num >= 40 && num < 50) {
      ans += "XL";
      num -= 40;
    } else if (num >= 10 && num < 40) {
      ans += "X";
      num -= 10;
    } else if (num == 9) {
      ans += "IX";
      num -= 9;
    } else if (num >= 5 && num < 9) {
      ans += "V";
      num -= 5;
    } else if (num == 4) {
      ans += "IV";
      num -= 4;
    } else if (num < 4) {
      ans += "I";
      num--;
    }
  }
  // return the result
  return ans;
}

let number = 3549;
console.log(intToRoman1(number));
