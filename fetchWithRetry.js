// implement auto retry for fetch, it is automatic retrying for given retry count

function fetchWithRetry(url, options, maximumRetry = 1) {
  return fetch(url, options)
    .then((response) => {
      if (!response.ok) {
        throw Error(response.statusText);
      }
      return response;
    })
    .catch((error) => {
      console.log(error);
      if (maximumRetry === 0) {
        throw Error(error);
      }
      return fetchWithRetry(url, options, maximumRetry - 1);
    });
}

async function fetchWithAutoRetry(fetcher, maximumRetryCount = 1) {
  if (maximumRetryCount > 0) {
    try {
      console.log("maximumRetryCount from try block = ", maximumRetryCount);
      const result = await fetcher();
      return result;
    } catch (error) {
      console.log("maximumRetryCount from catch block = ", maximumRetryCount);
      const result = await fetchWithAutoRetry(fetcher, maximumRetryCount - 1);
      return result;
    }
  }
  throw new Error("Maximum retry count exceeded");
}

const p1 = () => new Promise((resolve, reject) => resolve("p1"));
const p2 = () =>
  new Promise((resolve, reject) => {
    if (Math.random() > 0.5) {
      resolve("p2");
    } else {
      reject("p2");
    }
  });

(async () => {
  try {
    const result = await fetchWithAutoRetry(p2, 5);
    console.log("result from fetchWithAutoRetry", result);
  } catch (error) {
    console.log("error from fetchWithAutoRetry", error);
  }
})();
