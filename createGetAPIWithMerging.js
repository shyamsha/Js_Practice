// Write a function createGetAPIWithMerging(getAPI) that merges identical API calls to prevent unnecessary requests.
// If two or more API calls are made with the same path and config within a short duration,
// only the first API call should execute, and the subsequent identical calls should return the result of the first call.
// After a specific duration (e.g., 1000ms), identical calls should be treated as new requests.

function createGetAPIWithMerging(getAPI) {
  let cache = new Map();
  let timeout = 1000;
  return function (path, config) {
    const key = `${path}-${JSON.stringify(config)}`;
    if (cache.has(key)) {
      return cache.get(key);
    }
    const result = getAPI(path, config);
    cache.set(key, result);
    setTimeout(() => {
      cache.delete(key);
    }, timeout);
    return cache.get(key);
  };
}

let getAPI = createGetAPIWithMerging((path, config) => {
  console.log(
    `Making request to ${path} with config ${JSON.stringify(config)}`
  );
  return `Response from ${path}`;
});
