window.onload = () => {
    console.log("ze da silva");
    "use strict";
    if ("serviceWorker" in navigator) {
        navigator.serviceWorker.register("sw.js")  
            .then((registration) => {
                console.log("Service Worker registrado com sucesso", registration);
            })
            .catch((error) => {
                console.error("Falha ao registrar o Service Worker:", error);
            });
    }
};
