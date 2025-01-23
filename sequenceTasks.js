// sequenceTasks using promises
// Execute async tasks in Sequence

function createAsyncTask() {
  const value = Math.floor(Math.random() * 10);
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (value < 5) {
        reject(`error is ${value}`);
      } else {
        resolve(value);
      }
    }, value * 1000);
  });
}

let tasks = [
  createAsyncTask(),
  createAsyncTask(),
  createAsyncTask(),
  createAsyncTask(),
  createAsyncTask(),
  createAsyncTask(),
];
// Execute async tasks in Sequence means 
function asyncSequence(tasks, callback) {
  let results = [];
  let errors = [];
  let completed = 0;
  tasks.reduce((prev, curr) => {
    return prev.finally(() => {
      return curr
        .then((result) => {
          results.push(result);
        })
        .catch((error) => {
          errors.push(error);
        })
        .finally(() => {
          completed++;
          if (completed === tasks.length) {
            callback(errors, results);
          }
        });
    });
  }, Promise.resolve());
}

asyncSequence(tasks, (error, result) => {
  console.log(error);
  console.log(result);
});

const asyncSequence1 = async (tasks, callback) => {
  let results = [];
  let errors = [];

  for (let task of tasks) {
    try {
      let res = await task;
      results.push(res);
    } catch (e) {
      errors.push(e);
    }
  }

  callback(errors, results);
};

asyncSequence1(tasks, (error, result) => {
  console.log("errors is", error);
  console.log("results is", result);
});
