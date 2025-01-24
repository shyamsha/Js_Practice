// multiply elements except num[i]

// ex[1,2,3] => [6,3,2]

let nums = [1, 2, 3];

var productExceptSelf2 = function (nums) {
  let result = [];
  let product = 1;
  for (let i = 0; i < nums.length; i++) {
    result[i] = product;
    product *= nums[i];
  }
  product = 1;
  for (let i = nums.length - 1; i >= 0; i--) {
    result[i] *= product;
    product *= nums[i];
  }
  return result;
};
let nums2 = [1, 2, 3, 4];
console.log(productExceptSelf2(nums2));

var productExceptSelf = function (nums) {
  const answer = new Array(nums.length).fill(1);

  let left = 1;
  for (let i = 0; i < nums.length; i++) {
    answer[i] *= left;
    left *= nums[i];
  }

  let right = 1;
  for (let i = nums.length - 1; i >= 0; i--) {
    answer[i] *= right;
    right *= nums[i];
  }

  return answer;
};
