let str = "javascriptecidoful";
const sp = str.split("");

function a() {
  for (let i = 0; i < sp.length; i++) {
    if ("aeiou".indexOf(sp[i]) >= 0) {
      sp.splice(i, 1);
    }
  }
}
a();
console.log(sp.join(""));
