function* iterate(a, b) {
  for (let i = a; i <= b; i += 1) {
    yield i;
  }
}

function range(a, b) {
  if (typeof a === "string") {
    let result = [...iterate(a.charCodeAt(), b.charCodeAt())].map((n) =>
      String.fromCharCode(n)
    );
    console.log(result);
  }
}

range("A", "G");
