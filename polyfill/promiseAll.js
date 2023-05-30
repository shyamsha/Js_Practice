// create promise.all polyfill

const promise1 = new Promise(function (resolve, reject) {
  resolve("syam");
});
const promise2 = new Promise(function (resolve, reject) {
  resolve("syam1");
});
const promise3 = new Promise(function (resolve, reject) {
  resolve("syam2");
});

Promise.myall = function (values) {
  return new Promise((resolve, reject) => {
    let results = [];
    let total = 0;
    values.forEach((item, index) => {
      Promise.resolve(item).then((res) => {
        results[index] = res;
        total++;
        if (total === values.length) resolve(results);
      });
    });
  });
};

Promise.myall([promise1, promise2, promise3])
  .then((res) => console.log(res))
  .catch((err) => console.log(err));
