let obj = { name: "syam", address: "chirala", pin: "523184" };

function objReverse(obj) {
  let newObj = {};
  let keys = Object.keys(obj).reverse();
  for (let key of keys) {
    newObj[key] = obj[key];
  }
  return newObj;
}
console.log(objReverse(obj));
