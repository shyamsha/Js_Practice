// Best Time to Buy and Sell Stock
// You are given an array prices where prices[i] is the price of a given stock on the ith day.

// You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.

// Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.

// Example 1:

// Input: prices = [7,1,5,3,6,4]
// Output: 5
// Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
// Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell.
// Example 2:

// Input: prices = [7,6,4,3,1]
// Output: 0
// Explanation: In this case, no transactions are done and the max profit = 0.

let prices0 = [7, 1, 5, 3, 6, 4];
let prices = [1, 2, 4];
let prices1 = [5, 2, 4, 1];
let prices2 = [7, 6, 4, 3, 1];

let maxProfit = function (prices) {
  let left = 0;
  let right = 1;
  let maxProfit = 0;
  while (right < prices.length) {
    if (prices[left] < prices[right]) {
      let profit = prices[right] - prices[left];
      maxProfit = Math.max(maxProfit, profit);
    } else {
      left = right;
    }
    right++;
  }
  return maxProfit;
};
// console.log(maxProfit(prices1));
// The code snippet contains a single while loop that iterates through the 'prices' array once.
// Therefore, the time complexity is O(n) where n is the number of elements in the 'prices' array.

let maxProfit1 = function (arr) {
  let min = arr[0];
  let max = 0;
  for (let i = 1; i < arr.length; i++) {
    let currentPrice = arr[i];
    min = Math.min(min, currentPrice);
    let profit = currentPrice - min;
    max = Math.max(profit, max);
  }
  return max;
};
console.log(maxProfit1(prices1));

// best time to buy and sell stock 2
// On each day, you may decide to buy and/or sell the stock. You can only hold at most one share of the stock at any time.
// However, you can buy it then immediately sell it on the same day.
// Input: prices = [7,1,5,3,6,4]
// Output: 7
// Explanation: Buy on day 2 (price = 1) and sell on day 3 (price = 5), profit = 5-1 = 4.
// Then buy on day 4 (price = 3) and sell on day 5 (price = 6), profit = 6-3 = 3.
// Total profit is 4 + 3 = 7.

function maxProfit2(arr) {
  // let min = arr[0];
  // let max = 0;
  // let profit = 0;
  // for (let i = 1; i < arr.length; i++) {
  //   let current = arr[i];
  //   min = Math.min(min, current);
  //   profit = current - min;

  //   if (current > arr[i + 1]) {
  //     min = current;
  //     max += profit;
  //     profit = 0;
  //   }
  // }

  // return max + profit;
  // write code
  let maxProfit = 0;
  for (let i = 1; i < arr.length; i++) {
    //simplified version
    if (arr[i] > arr[i - 1]) {
      maxProfit += arr[i] - arr[i - 1];
    }
  }
  return maxProfit;
}
let nums = [1, 2, 3, 4, 5];
// let nums = [7, 6, 4, 3, 1];
// let nums = [7, 1, 5, 3, 6, 4];

console.log(maxProfit2(nums));
