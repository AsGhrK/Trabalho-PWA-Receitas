const cacheName = "sabores-em-sovimento";
const filesToCache = [
    "/",
    "/index.html",
    "/css/index.css",
    "/css/paginas.css",
    "/js/mein.js",
    "/html/carnes",
    "/html/doces",
    "/html/massas",
    "/images/bolo-chocolate.png",
    "/images/brigadeiro.png",
    "/images/costela-bacon.png",
    "/images/cozinha.png",
    "/images/feijoada.png",
    "/images/fettuccine-alfredo.png",
    "/images/frango-assado.png",
    "/images/imagem1.png",
    "/images/imagem2.png",
    "/images/nhoque-batata.png",
    "/images/penne-arrabbiata.png",
    "/images/torta-limao.png",
];

self.addEventListener("install", (e) => {
    e.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return cache.addAll(filesToCache);
        })
    );
});
self.addEventListener("fetch", (e) => {
    e.respondWith(
        caches.match(e.request).then((response) => { return response || fetch(e.request); })
    );
});