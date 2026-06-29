// This tells Chrome your app supports offline mode, even though it's blank
self.addEventListener('install', (event) => {
  self.skipWaiting();
});

self.addEventListener('fetch', (event) => {
  // Passively passes through all network requests without blocking anything
  event.respondWith(fetch(event.request));
});
