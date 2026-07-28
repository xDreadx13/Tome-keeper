self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open('tomekeeper-v1').then((cache) => {
      return cache.addAll(['/Tome-keeper/', '/Tome-keeper/index.html']);
    })
  );
});

self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then((response) => {
      return response || fetch(e.request);
    })
  );
});

