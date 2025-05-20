// promiseAllWithConcurrencyLimit
function promiseAllWithConcurrencyLimit(functions, limit) {
  return new Promise((resolve, reject) => {
    const results = [];
    let currentIndex = 0;
    let activeCount = 0;

    function processNext() {
      if (currentIndex >= functions.length && activeCount === 0) {
        resolve(results);
        return;
      }

      while (activeCount < limit && currentIndex < functions.length) {
        const promise = functions[currentIndex++];
        activeCount++;

        promise
          .then((result) => {
            results.push(result);
          })
          .catch((error) => {
            reject(error);
          })
          .finally(() => {
            activeCount--;
            processNext();
          });
      }
    }

    processNext();
  });
}
