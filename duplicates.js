const yourArray = [1, 1, 2, 3, 4, 5, 5];

// set create array with unique
const yourArrayWithoutDuplicates = [...new Set(yourArray)];

let duplicates = [...yourArray];
yourArrayWithoutDuplicates.forEach((item) => {
  const i = duplicates.indexOf(item);
  duplicates = duplicates
    .slice(0, i)
    .concat(duplicates.slice(i + 1, duplicates.length));
});

console.log(duplicates); //[ 1, 5 ]

// or

const yourArray1 = [1, 1, 2, 3, 4, 5, 5];

let duplicates1 = [];

const tempArray = [...yourArray1].sort();

for (let i = 0; i < tempArray.length; i++) {
  if (tempArray[i + 1] === tempArray[i]) {
    duplicates1.push(tempArray[i]);
  }
}

console.log(duplicates1); //[ 1, 5 ]
