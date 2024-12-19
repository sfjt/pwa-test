var cacheName = "pwa-test-cheches"
var urlsToCache = [
	"/sfjt.github.io/pwa-test/",
]

self.addEventListener("install", function(event) {
  event.waitUntil(
    caches
      .open(cacheName)
      .then(function(cache) {
        return cache.addAll(urlsToCache)
      })
    )
})

self.addEventListener("fetch", function(event) {
  event.respondWith(
    caches
      .match(event.request)
      .then(function(response) {
        return response ? response : fetch(event.request)
      })
    )
})
