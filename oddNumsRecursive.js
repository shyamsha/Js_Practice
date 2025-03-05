function oddNumsRecursive(nums) {
  let newArr = [];
  if (nums.length === 0) return newArr;
  if (nums[0] % 2 !== 0) newArr.push(nums[0]);
  newArr = newArr.concat(oddNumsRecursive(nums.slice(1)));
  return newArr;
}
console.log(oddNumsRecursive([1, 2, 3, 4, 5, 6, 7, 8, 9])); // [1, 3, 5, 7, 9]
