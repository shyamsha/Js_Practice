function cutString(str, num = str.length) {
  const el = [];
  for (let i = 0; i < str.length; i = i + num) {
    el.push(str.slice(i, i + num));
  }
  return el;
}

console.log(cutString("javascript", 4));

function stringChop(str, size = str.length) {
  const arr = [];
  let i = 0;
  while (i < str.length) {
    arr.push(str.slice(i, i + size));
    i = i + size;
  }
  return arr;
}

stringChop("JavaScript", 2);
