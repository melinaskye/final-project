const cacheName = "pwas-are-awesome-v1";

const urlsToCache = [
  "index.html",
  "styles.css",
  "main.js",
  "audio/alarm-audio.mp3",
  "/",
  "app.webmanifest"
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(cacheName).then((cache) => {
      return cache.addAll(urlsToCache);
    }),
  );
});

self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
      return cachedResponse || fetch(event.request);
    }),
  );
});
