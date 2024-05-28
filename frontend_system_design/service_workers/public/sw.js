const CACHE_NAME = "my-cache-v2";
const urlsToCache = [
  "./index.html",
  "./styles.css",
  "./script.js",
  "./image.gif",
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(urlsToCache))
  );
});

self.addEventListener("activate", (event) => {
  // cleanup useless cache
  event.waitUntil(
    caches.keys().then((keyList) => {
      return Promise.all(
        keyList.map((key) => {
          if (key !== CACHE_NAME) {
            return caches.delete(key);
          }
        })
      );
    })
  );
});

self.addEventListener("fetch", (event) => {
  // offline experience
  // whenever file requested
  // if cache is empty fetch from network and update cache
  // fetch(event.request)
  //   .then((res) => {
  //     // update my cache
  //     const cloneData = res.clone();
  //     caches.open(CACHE_NAME).then((cache) => {
  //       cache.put(event.request, cloneData);
  //     });
  //     console.log("returning from network");
  //     return res;
  //   })
  //   .catch(() => {
  //     console.log("returning from cache");
  //     return caches.match(event.request).then((file) => file);
  //   });
  // or
  event.respondWith(
    caches.match(event.request).then((res) => {
      return res || fetch(event.request);
    })
  );
});
