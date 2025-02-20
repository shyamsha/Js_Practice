// When dealing with a large number of API requests,
// sending all requests simultaneously can overload a server, especially if it has low specifications.
// To handle this, you need to implement a throttling mechanism that limits the number of concurrent API calls.
// Write a function throttlePromises() that:
// 1. Accepts an array of functions returning promises (e.g., API call functions).
// 2. Limits the maximum number of concurrent pending promises to a specified value (e.g., 5).
// 3. Resolves with the combined results of all promises, similar to Promise.all().
// 4. Relays any errors occurring in the API calls to the catch() block.
// 5. should handle mix of fast and slow promises
//! read and write
function throttlePromises(promises, limit) {
  return new Promise((resolve, reject) => {
    let results = [];
    let index = 0;
    let pendingPromises = [];
    function runPromises() {
      if (index === promises.length && pendingPromises.length === 0) {
        resolve(results);
        return;
      }
      while (pendingPromises.length < limit && index < promises.length) {
        let currentPromise = promises[index];
        currentPromise()
          .then((result) => {
            results.push(result);
          })
          .catch((error) => {
            results.push(error);
          })
          .finally(() => {
            pendingPromises = pendingPromises.filter(
              (p) => p !== currentPromise
            );
            runPromises();
          });
        pendingPromises.push(currentPromise);
        index++;
      }
    }
    runPromises();
  });
}

function delay(time) {
  return new Promise((resolve) => setTimeout(resolve, time));
}

const t1 = async () => {
  console.log("t1 started");
  await delay(2000);
  console.log("t1 finished");
};
const t2 = async () => {
  console.log("t2 started");
  await delay(1000);
  console.log("t2 finished");
};

const t3 = async () => {
  console.log("t3 started");
  await delay(1500);
  console.log("t3 finished");
};

const t4 = async () => {
  console.log("t4 started");
  await delay(1000);
  console.log("t4 finished");
};

const t5 = async () => {
  console.log("t5 started");
  await delay(500);
  console.log("t5 finished");
};
throttlePromises([t1, t2, t3, t4, t5], 2).then((result) => {
  console.log(result);
});
