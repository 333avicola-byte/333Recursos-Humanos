/* KPI 333 · service worker
   Hace que el sitio se pueda instalar como app y que la portada y la pirámide abran sin conexión.
   Siempre pide primero la versión nueva a GitHub; la copia guardada se usa solo si no hay internet.
   El inicio de sesión de Microsoft, SharePoint y las librerías externas van directo a la red. */
const CACHE = "kpi333-v1";
const BASE = ["./", "index.html", "piramide.html", "manifest.webmanifest", "icon-192.png", "icon-512.png"];
const SCOPE = new URL(self.registration.scope).pathname;

self.addEventListener("install", e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(BASE)).then(() => self.skipWaiting()));
});

self.addEventListener("activate", e => {
  e.waitUntil(
    caches.keys()
      .then(ks => Promise.all(ks.filter(k => k !== CACHE).map(k => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener("fetch", e => {
  const r = e.request, u = new URL(r.url);
  if (r.method !== "GET" || u.origin !== location.origin || !u.pathname.startsWith(SCOPE)) return;
  e.respondWith(
    fetch(r)
      .then(res => {
        if (res.ok) { const copia = res.clone(); caches.open(CACHE).then(c => c.put(r, copia)); }
        return res;
      })
      .catch(() =>
        caches.match(r, { ignoreSearch: true })
          .then(m => m || (r.mode === "navigate" ? caches.match("./") : Response.error()))
      )
  );
});
