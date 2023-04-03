function sort(array) {
  let done = false;
  while (!done) {
    done = true;
    for (let i = 1; i < array.length; i += 1) {
      if (array[i - 1] > array[i]) {
        done = false;
        let tmp = array[i - 1];
        array[i - 1] = array[i];
        array[i] = tmp;
      }
    }
  }

  return array;
}

var numbers = [12, 10, 15, 11, 14, 13, 16, -1, 16, 11];
sort(numbers);
console.log(numbers);

//another way
const arr = [4, 56, 5, 3, 34, 37, 89, 57, 98];
const sortWithReduce = (arr) => {
  return arr.reduce((acc, val) => {
    let ind = 0;
    while (ind < arr.length && val < arr[ind]) {
      ind++;
    }
    acc.splice(ind, 0, val);
    return acc;
  }, []);
};
console.log(sortWithReduce(arr));
