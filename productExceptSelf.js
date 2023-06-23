// multiply elements except num[i]

// ex[1,2,3] => [6,3,2]

const { log } = require("console");

let nums = [1, 2, 3];

// let productExceptSelf1 = function(nums) {
// let result=[]
// let num=1
//   let i=nums.length-1
// for(let i=0;i<nums.length;i++){
//   let numValue=nums[i]
//   if(result.length!==0){
//     numValue=numValue*result[i-1]
//   }
//   result.push(numValue)
// }
// for(i;i>0;i--){
//   result[i]=result[i-1]*num
//   num=nums[i]*num
// }
//  result[i]=num
//   return result
// };

let productExceptSelf = function (nums) {
  const length = nums.length;
  const result = new Array(length).fill(1);

  // Calculate the product of elements before the current index
  let productBefore = 1;
  for (let i = 0; i < length; i++) {
    result[i] *= productBefore;
    productBefore *= nums[i];
  }
  // Calculate the product of elements after the current index
  let productAfter = 1;
  for (let i = length - 1; i >= 0; i--) {
    result[i] *= productAfter;
    productAfter *= nums[i];
  }

  return result;
};

log(productExceptSelf(nums)); //[ 6, 3, 2 ]
