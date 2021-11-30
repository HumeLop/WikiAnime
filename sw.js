importScripts('https://storage.googleapis.com/workbox-cdn/releases/6.2.0/workbox-sw.js');

workbox.precaching.precacheAndRoute([
  'index.html',
  'js/app.js',
  'img/icons',
  'img/anime-away-face.svg',
  'img/Anime-icono.jpg',
]);
workbox.routing.registerRoute(
  new RegExp('\\.*'),
  new workbox.strategies.CacheFirst({
    cacheName: 'CacheHTML',
  })
);
// const cacheName = 'appCacheV1';
// const contentToCache = [
//     'index.html',
//     'js/app.js',
//     'manifest.js',
//     'img/icons/',
//     'img/anime-away-face.svg',
//     'img/Anime-icono.jpg',
// ];

// self.addEventListener('install', (e) => {
//     console.log('[Service Worker] Install');
//     e.waitUntil((async () => {
//         const cache = await caches.open(cacheName);
//         console.log('[Service Worker] Caching all: app shell and content');
//         await cache.addAll(contentToCache);
//     }));
// });

// self.addEventListener('fetch', (e) => {
//     e.respondWith((async () => {
//       const r = await caches.match(e.request);
//       console.log(`[Service Worker] Fetching resource: ${e.request.url}`);
//       if (r) return r;
//       const response = await fetch(e.request);
//       const cache = await caches.open(cacheName);
//       console.log(`[Service Worker] Caching new resource: ${e.request.url}`);
//       cache.put(e.request, response.clone());
//       return response;
//     })());
//   });

// self.addEventListener('activate', event => {

//     console.log('SW: Activo');
// });

// self.addEventListener('fetch', event => {

// });

// SYNC: Recuperar conexión.

// self.addEventListener('sync', event => {
//     console.log('Tenemos Cónexión');
//     console.log(event);
//     console.log(event.tag);
// });