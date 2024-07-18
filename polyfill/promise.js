// create promise.all polyfill

const promise1 = new Promise(function (resolve, reject) {
  resolve("syam");
});
const promise2 = new Promise(function (resolve, reject) {
  reject(new Error("promise was rejected"));
});
const promise3 = new Promise(function (resolve, reject) {
  resolve("syam2");
});

Promise.myall = function (promises) {
  return new Promise((resolve, reject) => {
    let results = [];
    let total = 0;
    promises.forEach((promise, index) => {
      Promise.resolve(promise).then((res) => {
        results[index] = res;
        total++;
        if (total === promises.length) resolve(results);
      }, reject);
    });
  });
};

Promise.myall([promise1, promise2, promise3])
  .then((res) => console.log(res))
  .catch((err) => console.log(err));

// create promise polyfill

const MyPromise = function (executor) {
  let onResolve,
    onReject,
    isFullFilled = false,
    isRejected = false,
    isCalled = false,
    value;
  function resolve(val) {
    isFullFilled = true;
    value = val;
    if (typeof onResolve === "function") {
      onResolve(val);
      isCalled = true;
    }
  }
  function reject(val) {
    isRejected = true;
    value = val;
    if (typeof onReject === "function") {
      onReject(val);
      isCalled = true;
    }
  }
  this.then = function (cb) {
    onResolve = cb;
    if (isFullFilled && !isCalled) {
      isCalled = true;
      onResolve(value);
    }
    return this;
  };
  this.catch = function (cb) {
    onReject = cb;
    if (isRejected && !isCalled) {
      isCalled = true;
      onResolve(value);
    }
    return this;
  };
  try {
    executor(resolve, reject);
  } catch (error) {
    reject(error);
  }
};

const examplePromise = new MyPromise((resolve, reject) => {
  // setTimeout(() => {
  reject(2);
  // }, 0)
});

examplePromise
  .then((res) => {
    console.log(res);
  })
  .catch((error) => console.log(error));
