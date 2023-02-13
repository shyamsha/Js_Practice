function func() {
  for (let value of arguments) {
    console.log(value);
  }
}

// driver code
func(1, "Hello", true);

function func1(a, b, c) {
  if (func.length === arguments.length) {
    console.log("Number of arguments passed match the expected arguments");
  } else {
    throw new Error(
      "Number of arguments passed do not match the expected arguments"
    );
  }
}

function varArgsFunc(...params) {
  params.forEach(function (value, index) {
    console.log(index, ": ", value);
  });
}

// driver code
varArgsFunc("Hello", ",", "World", "!!!");