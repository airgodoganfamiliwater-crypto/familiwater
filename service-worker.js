const CACHE_NAME = "familiwater-v3";

const urlsToCache = [
  "./",
  "./index.html",
  "./profil.html",
  "./game.html",
  "./logofw.png",
  "./ikon-192.png",
  "./ikon-512.png"
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => cache.addAll(urlsToCache))
  );
});

self.addEventListener("activate", (event) => {
  console.log("PWA Service Worker activated");
});

self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request)
      .then((response) => response || fetch(event.request))
  );
});