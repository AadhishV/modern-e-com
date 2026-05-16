const CACHE_NAME = "shopfast-cache-v1";
const ASSETS = [
  "./e-comweb.html",
  "./e-comweb.css",
  "./e-comweb.js",
  "./manifest.json",
  "https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js",
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS)),
  );
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches
      .keys()
      .then((keys) =>
        Promise.all(
          keys
            .filter((key) => key !== CACHE_NAME)
            .map((key) => caches.delete(key)),
        ),
      ),
  );
  self.clients.claim();
});

self.addEventListener("fetch", (event) => {
  if (event.request.method !== "GET") return;
  event.respondWith(
    caches.match(event.request).then(
      (cached) =>
        cached ||
        fetch(event.request)
          .then((response) => {
            if (
              !response ||
              response.status !== 200 ||
              response.type !== "basic"
            )
              return response;
            const responseClone = response.clone();
            caches
              .open(CACHE_NAME)
              .then((cache) => cache.put(event.request, responseClone));
            return response;
          })
          .catch(() => caches.match("./e-comweb.html")),
    ),
  );
});
