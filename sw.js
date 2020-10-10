//jshint esversion :6
self.addEventListener("install", e => {
    e.waitUntil(
            caches.open("static").then(cache => {
                return cache.addAll(['./', './css/style.css', './image/144.png']);
            })
        );
});

self.addEventListener("fetch", e => {
    e.respondWith(
        caches.match(e.request).then(response =>{
            return response || fetch(e.request);
        })
    );
});