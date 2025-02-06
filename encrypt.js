// encrypt string using caesar cipher with key k is the number of letters to shift
const caesarCipher = (s, k) => {
  let result = "";
  let alphabetsCount = 26;
  for (let i = 0; i < s.length; i++) {
    let charCode = s.charCodeAt(i); // index of character
    if (charCode >= 65 && charCode <= 90) {
      result += String.fromCharCode(
        ((charCode - 65 + k) % alphabetsCount) + 65
      );
    } else if (charCode >= 97 && charCode <= 122) {
      result += String.fromCharCode(
        ((charCode - 97 + k) % alphabetsCount) + 97
      );
    } else {
      result += s[i];
    }
  }
  return result;
};
let s = "middle-Outz";
let k = 2;
console.log(caesarCipher(s, k));
