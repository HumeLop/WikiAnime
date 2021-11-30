
let url = window.location.href;
let swLocation = '/wikianime/sw.js';
if (navigator.serviceWorker) {

    if (url.includes('localhost')) {
        swLocation = '/sw.js';
    }
    navigator.serviceWorker.register(swLocation);
}
