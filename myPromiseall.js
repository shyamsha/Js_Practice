const promise1 = new Promise(function (resolve, reject) {
  resolve("syam");
});
const promise2 = new Promise(function (resolve, reject) {
  reject("promise was rejected");
});
const promise3 = new Promise(function (resolve, reject) {
  resolve("syam2");
});

const myPromiseAll = function (promises) {
  return new Promise(function (resolve, reject) {
    const results = [];
    let count = 0;
    for (let i = 0; i < promises.length; i++) {
      promises[i]
        .then((result) => {
          results[i] = result;
          count++;
          if (count === promises.length) {
            resolve(results);
          }
        })
        .catch((error) => {
          reject(error);
        });
    }
  });
};

const output = myPromiseAll([promise1, promise2, promise3]);
output
  .then((res) => {
    console.log(res);
  })
  .catch((error) => {
    console.log(error);
  });
