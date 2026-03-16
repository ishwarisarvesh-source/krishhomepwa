const CACHE_NAME = "krish-app-v1";

const urlsToCache = [
"index.html",
"curtains.html",
"blinds.html",
"wallpaper.html",
"carpet.html",
"mattress.html",
"sofa.html",
"sofapuffy.html",
"sofa teapoy.html",
"bedback.html",
"artificalgrass.html",
"curtains track.html",
"bhartiya bhatik.html",
"invoicefinal.html"
];

self.addEventListener("install", event => {
event.waitUntil(
caches.open(CACHE_NAME)
.then(cache => {
return cache.addAll(urlsToCache);
})
);
});

self.addEventListener("fetch", event => {
event.respondWith(
caches.match(event.request)
.then(response => {
return response || fetch(event.request);
})
);
});