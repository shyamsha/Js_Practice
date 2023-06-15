// climbing stairs
// like 4 steps so {1,1,1,1}=4 {1,2,1}=4 {1,1,2}=4 {2,1,1} =4 {2,2}=4 it will 5 pairs to equal 4

function climbing(n) {
  const noOfSteps = [1, 2];
  for (let i = 2; i <= n; i++) {
    noOfSteps[i] = noOfSteps[i - 1] + noOfSteps[i - 2];
  }
  return noOfSteps[n - 1];
}

console.log(climbing(4));
