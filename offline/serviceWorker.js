const CACHE_NAME = "v2";
const urlsToCache = ["/static/bootstrap.min.css", "/About", "/", "/ApiPages.js",
    "https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js", "https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,700", "https://code.jquery.com/jquery-3.3.1.slim.min.js"];

self.addEventListener("install", event => {
    const preLoaded = caches.open(CACHE_NAME)
        .then(cache => cache.addAll(urlsToCache));
    event.waitUntil(preLoaded);
});
self.addEventListener('activate', function (e) {
    console.log('[ServiceWorker] Activated');

    e.waitUntil(
        caches.keys().then(function (cacheNames) {
            return Promise.all(cacheNames.map(function (thisCacheName) {
                if (thisCacheName !== CACHE_NAME) {
                    console.log('[ServiceWorker] Removing Cached Files from Cache - ', thisCacheName);
                    return caches.delete(thisCacheName);
                }
            }));
        })
    );

});

self.addEventListener("fetch", event => {
    const response = caches.match(event.request)
        .then(match => match || fetch(event.request));
    event.respondWith(response);
});