const CACHE_NAME = "visualizer-v1";
const urlsToCache = [
  "/visualizer/",
  "/visualizer/index.html",
  "/visualizer/manifest.json",
  "/visualizer/src/styles/style.css",
  "/visualizer/src/scripts/main.js",
  "/visualizer/src/images/logo-apenas-letras.png", 
  "/visualizer/src/images/logo-favicon.png",
  "/visualizer/src/images/icon-192.png", 
  "/visualizer/src/images/icon-512.png",
  "/visualizer/src/pages/home.html"
];

// Instalando o SW e adicionando arquivos ao cache
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(urlsToCache))
  );
});

// Interceptando requisições para servir do cache
self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => response || fetch(event.request))
  );
});

// Atualizando cache quando o SW muda
self.addEventListener("activate", (event) => {
  const cacheWhitelist = [CACHE_NAME];
  event.waitUntil(
    caches.keys().then((keyList) =>
      Promise.all(
        keyList.map((key) => {
          if (!cacheWhitelist.includes(key)) {
            return caches.delete(key);
          }
        })
      )
    )
  );
});
