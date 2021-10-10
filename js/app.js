// if ('serviceWorker' in navigator) {
//     console.log('Podemos Usarlor!');
// }

if (navigator.serviceWorker) {
    navigator.serviceWorker.register('/sw.js');     
}
