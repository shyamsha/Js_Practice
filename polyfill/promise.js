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
    let completedPromises = 0;
    if (promises.length === 0) Promise.resolve(results);
    promises.forEach((promise, index) => {
      Promise.resolve(promise)
        .then((res) => {
          results[index] = res;
          completedPromises++;
          if (completedPromises === promises.length) resolve(results);
        })
        .catch((error) => {
          reject(error);
        });
    });
  });
};

Promise.myall([promise1, promise2, promise3])
  .then((res) => console.log(res))
  .catch((err) => console.log(err));

// create promise.allSettled polyfill
Promise.allSettled = function (promises) {
  let mappedPromises = promises.map((p) => {
    return p
      .then((value) => {
        return {
          status: "fulfilled",
          value,
        };
      })
      .catch((reason) => {
        return {
          status: "rejected",
          reason,
        };
      });
  });
  return Promise.all(mappedPromises);
};
// create promise polyfill

const MyPromise = function (executor) {
  let onResolve = null,
    onReject = null,
    isFullFilled = false,
    isRejected = false,
    isCalled = false,
    value = null;
  function resolve(val) {
    isFullFilled = true;
    value = val;
    if (typeof onResolve === "function") {
      onResolve(val);
      isCalled = true;
    }
  }
  function reject(err) {
    isRejected = true;
    value = err;
    if (typeof onReject === "function") {
      onReject(err);
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
      onReject(value);
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
  reject("error");
});

examplePromise
  .then((res) => {
    console.log(res, "promise");
  })
  .catch((error) => console.log(error));

MyPromise.resolve = (val) => {
  return new MyPromise((resolve, reject) => {
    resolve(val);
  });
};

MyPromise.reject = (err) => {
  return new MyPromise((resolve, reject) => {
    reject(err);
  });
};

MyPromise.all = function (promises) {
  return new MyPromise((resolve, reject) => {
    let results = [];
    let completedPromises = 0;
    if (promises.length === 0) {
      MyPromise.resolve(results);
      return;
    }
    for (let i = 0; i < promises.length; i++) {
      promises[i]
        .then((val) => {
          done(val, i);
        })
        .catch((error) => reject(error));
    }
    function done(val, i) {
      results[i] = val;
      completedPromises++;
      if (completedPromises === promises.length) resolve(results);
    }
  });
};

const p1 = MyPromise.resolve(1);
const p2 = MyPromise.resolve(2);
const p3 = MyPromise.resolve(3);
MyPromise.all([p1, p2, p3])
  .then((res) => console.log(res))
  .catch((err) => console.log(err));

MyPromise.race = function (promises) {
  return new MyPromise((resolve, reject) => {
    promises.forEach((promise) => {
      promise
        .then((val) => {
          resolve(val);
        })
        .catch((err) => {
          reject(err);
        });
    });
  });
};

const p4 = MyPromise.resolve(4);
const p5 = MyPromise.resolve(5);
const p6 = MyPromise.resolve(6);
MyPromise.race([p4, p5, p6])
  .then((res) => console.log(res))
  .catch((err) => console.log(err));

const race = function (promisesArray) {
  return new Promise((resolve, reject) => {
    promisesArray.forEach((promise) => {
      Promise.resolve(promise)
        .then(resolve, reject) // resolve, when any of the input promise resolves
        .catch(reject); // reject, when any of the input promise rejects
    });
  });
};
