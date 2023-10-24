// moving all zeros to end of array without using extra array []

var moveZeroesRight = function (nums) {
  return nums.sort(function (a, b) {
    if (a === 0 && b !== 0) return 1;
    else if (b === 0 && a !== 0) return -1;
    else return 0;
  });
};

var moveZeroesLeft = function (nums) {
  return nums.sort(function (a, b) {
    if (a !== 0 && b === 0) return 1;
    else if (b !== 0 && a === 0) return -1;
    else return 0;
  });
};
console.log(moveZeroesLeft([0, 1, 0, 3, 12]));
let moveZeroes1 = function (nums) {
  let low = 0;
  let high = low + 1;

  while (high <= nums.length - 1) {
    if (nums[low] !== 0) {
      low++;
      high++;
    } else {
      if (nums[high] !== 0) {
        [nums[low], nums[high]] = [nums[high], nums[low]];
        low++;
      }
      high++;
    }
  }
};

var moveZeroes2 = function (nums) {
  let left = 0;
  let right = 0;

  while (left < nums.length) {
    if (nums[left] !== 0) {
      [nums[left], nums[right]] = [nums[right], nums[left]];
      right++;
    }

    left++;
  }
};

function moveZerosR(arr) {
  let i = 0;
  for (let j = 0; j < arr.length; j++) {
    if (arr[j] !== 0) {
      [arr[i], arr[j]] = [arr[j], arr[i]];
      i++;
    }
  }
  return arr;
}
log(moveZerosR([0, 1, 0, 3, 12]));

function moveZerosL(arr) {
  let i = 0;
  for (let j = 0; j < arr.length; j++) {
    if (arr[j] === 0) {
      [arr[i], arr[j]] = [arr[j], arr[i]];
      i++;
    }
  }
  return arr;
}
log(moveZerosL([0, 1, 0, 3, 12]));
