// Execute async tasks in parallel
function createAsyncTask() {
  const value = Math.floor(Math.random() * 10);
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (value < 5) {
        reject(`error is ${value}`);
      } else {
        resolve(value);
      }
    }, 1000);
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

function asyncParallel(tasks, callback) {
  let results = [];
  let errors = [];
  let completed = 0;
  tasks.forEach((element) => {
    return element
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
}

asyncParallel(tasks, (error, result) => {
  console.log(error);
  console.log(result);
});
