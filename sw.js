const CACHE="chinese-learning-v1";
const APP=["./","./index.html","./manifest.json","./sw.js","./icons/icon-192.png","./icons/icon-512.png"];
self.addEventListener("install",e=>e.waitUntil(caches.open(CACHE).then(c=>c.addAll(APP)).then(()=>self.skipWaiting())));
self.addEventListener("activate",e=>e.waitUntil(self.clients.claim()));
self.addEventListener("fetch",e=>{if(e.request.method!=="GET")return;e.respondWith(caches.match(e.request).then(x=>x||fetch(e.request).then(r=>{if(r.ok){let q=r.clone();caches.open(CACHE).then(c=>c.put(e.request,q))}return r}).catch(()=>caches.match("./index.html"))))});