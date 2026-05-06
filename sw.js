const CACHE_NAME = 'shokhersrity-v1';
const STATIC_ASSETS = [
    '/',
    '/index.html',
    '/gallery.html',
    '/reels.html',
    '/packages.html',
    '/contact.html',
    '/style.css',
    '/script.js',
    '/whatsapp-widget.js',
    '/image_catalog.js',
    '/manifest.json',
];

self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(CACHE_NAME).then(cache => {
            return cache.addAll(STATIC_ASSETS);
        })
    );
    self.skipWaiting();
});

self.addEventListener('activate', event => {
    event.waitUntil(
        caches.keys().then(keys =>
            Promise.all(
                keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k))
            )
        )
    );
    self.clients.claim();
});

self.addEventListener('fetch', event => {
    if (event.request.method !== 'GET') return;
    event.respondWith(
        caches.match(event.request).then(cached => cached || fetch(event.request))
    );
});

self.addEventListener('push', event => {
    const data = event.data ? event.data.json() : {};
    event.waitUntil(
        self.registration.showNotification(data.title || 'ShokherSrity', {
            body: data.body || 'Premium wedding photography in Bangladesh.',
            icon: '/attached_assets/logo.webp',
            badge: '/attached_assets/logo.webp',
        })
    );
});
