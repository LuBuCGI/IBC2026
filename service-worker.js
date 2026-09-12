const CACHE_NAME = 'cgi-ibc2026-v1.6.2';
const ASSETS = ['./README.md', './assets/app-icon-180.png', './assets/app-icon-192.png', './assets/app-icon-512.png', './assets/cgi-c.png', './assets/cgi-g.png', './assets/cgi-i.png', './assets/ibc-logo-red.png', './assets/logo50.png', './assets/progress-badge.png', './assets/raffle-bowl.svg', './de.html', './en.html', './index.html', './manifest.webmanifest', './pdf/ai-offering.pdf', './pdf/ai-strategy-de.pdf', './pdf/ai-strategy-en.pdf', './pdf/ai-strategy-und-implementierung.pdf', './pdf/cloud-sovereignty-de.pdf', './pdf/cloud-sovereignty-en.pdf', './pdf/cloud-und-sovereignty.pdf', './pdf/cybersecurity-de.pdf', './pdf/cybersecurity-en.pdf', './pdf/cybersecurity.pdf', './pdf/system-integration-de.pdf', './pdf/system-integration-en.pdf', './pdf/system-integration.pdf', './pdf/terms-and-conditions.pdf', './pdf/terms-privacy-de.pdf',
  "./pdf-pages/ai-strategy-de/page-01.jpg",
  "./pdf-pages/ai-strategy-de/page-02.jpg",
  "./pdf-pages/ai-strategy-de/page-03.jpg",
  "./pdf-pages/ai-strategy-de/page-04.jpg",
  "./pdf-pages/ai-strategy-de/page-05.jpg",
  "./pdf-pages/ai-strategy-de/page-06.jpg",
  "./pdf-pages/ai-strategy-en/page-01.jpg",
  "./pdf-pages/ai-strategy-en/page-02.jpg",
  "./pdf-pages/ai-strategy-en/page-03.jpg",
  "./pdf-pages/ai-strategy-en/page-04.jpg",
  "./pdf-pages/ai-strategy-en/page-05.jpg",
  "./pdf-pages/ai-strategy-en/page-06.jpg",
  "./pdf-pages/cloud-sovereignty-de/page-01.jpg",
  "./pdf-pages/cloud-sovereignty-de/page-02.jpg",
  "./pdf-pages/cloud-sovereignty-de/page-03.jpg",
  "./pdf-pages/cloud-sovereignty-de/page-04.jpg",
  "./pdf-pages/cloud-sovereignty-de/page-05.jpg",
  "./pdf-pages/cloud-sovereignty-en/page-01.jpg",
  "./pdf-pages/cloud-sovereignty-en/page-02.jpg",
  "./pdf-pages/cloud-sovereignty-en/page-03.jpg",
  "./pdf-pages/cloud-sovereignty-en/page-04.jpg",
  "./pdf-pages/cloud-sovereignty-en/page-05.jpg",
  "./pdf-pages/cybersecurity-de/page-01.jpg",
  "./pdf-pages/cybersecurity-de/page-02.jpg",
  "./pdf-pages/cybersecurity-de/page-03.jpg",
  "./pdf-pages/cybersecurity-de/page-04.jpg",
  "./pdf-pages/cybersecurity-de/page-05.jpg",
  "./pdf-pages/cybersecurity-en/page-01.jpg",
  "./pdf-pages/cybersecurity-en/page-02.jpg",
  "./pdf-pages/cybersecurity-en/page-03.jpg",
  "./pdf-pages/cybersecurity-en/page-04.jpg",
  "./pdf-pages/cybersecurity-en/page-05.jpg",
  "./pdf-pages/system-integration-de/page-01.jpg",
  "./pdf-pages/system-integration-de/page-02.jpg",
  "./pdf-pages/system-integration-de/page-03.jpg",
  "./pdf-pages/system-integration-de/page-04.jpg",
  "./pdf-pages/system-integration-de/page-05.jpg",
  "./pdf-pages/system-integration-en/page-01.jpg",
  "./pdf-pages/system-integration-en/page-02.jpg",
  "./pdf-pages/system-integration-en/page-03.jpg",
  "./pdf-pages/system-integration-en/page-04.jpg",
  "./pdf-pages/system-integration-en/page-05.jpg",
  "./pdf-pages/terms-and-conditions/page-01.jpg",
  "./pdf-pages/terms-and-conditions/page-02.jpg",
  "./pdf-pages/terms-and-conditions/page-03.jpg",
  "./pdf-pages/terms-and-conditions/page-04.jpg",
  "./pdf-pages/terms-and-conditions/page-05.jpg",
  "./pdf-pages/terms-and-conditions/page-06.jpg",
  "./pdf-pages/terms-and-conditions/page-07.jpg",
  "./pdf-pages/terms-and-conditions/page-08.jpg",
  "./admin.html",
  "./admin.webmanifest",
  "./assets/admin-icon-180.png",
  "./assets/admin-icon-192.png",
  "./assets/admin-icon-512.png"];
self.addEventListener('install', event => {
  event.waitUntil(caches.open(CACHE_NAME).then(cache => cache.addAll(ASSETS)).then(() => self.skipWaiting()));
});
self.addEventListener('activate', event => {
  event.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k)))).then(() => self.clients.claim()));
});
self.addEventListener('fetch', event => {
  if (event.request.method !== 'GET') return;
  const url = new URL(event.request.url);
  if (url.origin !== self.location.origin) return;

  if (event.request.mode === 'navigate') {
    event.respondWith(
      fetch(event.request).then(response => {
        if (response && response.ok) {
          const copy = response.clone();
          caches.open(CACHE_NAME).then(cache => cache.put(event.request, copy));
        }
        return response;
      }).catch(async () => {
        return (await caches.match(event.request, { ignoreSearch: true })) ||
               (await caches.match('./index.html'));
      })
    );
    return;
  }

  event.respondWith(
    caches.match(event.request).then(cached => cached || fetch(event.request).then(response => {
      if (response && response.ok) {
        const copy = response.clone();
        caches.open(CACHE_NAME).then(cache => cache.put(event.request, copy));
      }
      return response;
    }))
  );
});
