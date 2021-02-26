// Your task is to sort a given string. 
// Each word in the string will contain a single number.
// This number is the position the word should have in the result.
// example "is2 Thi1s T4est 3a"  -->  "Thi1s is2 3a T4est"

function order(words){
  var array = words.split(' ');
  var sortedArray = [];
  for(i = 0; i <= array.length; i++) {
    for(j = 0; j < array.length; j++) {
      if(array[j].indexOf(i) >= 0) {
        sortedArray.push(array[j]);
      }
    }
  }
  return sortedArray.join(' ');
}