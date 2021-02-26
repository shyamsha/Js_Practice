const incrementString = str => {
  if (str.match(/[0-9+]+/g)) {
    let numbers = str.replace(/[a-z+]+/g, "")
    console.log(Number(numbers)+1)
    return str.replace(numbers, (Number(numbers) + 1 + '').padStart(numbers.length, 0))
  } else {
    return str + 1
  }
}
console.log(incrementString("foo099"))