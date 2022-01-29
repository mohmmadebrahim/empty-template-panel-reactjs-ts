importScripts('https://www.gstatic.com/firebasejs/7.23.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/7.23.0/firebase-messaging.js');


const firebaseConfig = {
    // apiKey: "AIzaSyCccl6aPs1g84E3fDNEdnK28k_yT5zlMAs",
    // authDomain: "chaleebarber.firebaseapp.com",
    // projectId: "chaleebarber",
    // storageBucket: "chaleebarber.appspot.com",
    // messagingSenderId: "863173882194",
    // appId: "1:863173882194:web:0f3d322ae254a28cf10a8b",
    // measurementId: "G-QB5VGKJ4HQ"
};
self.firebase.initializeApp(firebaseConfig);
const messaging = self.firebase.messaging();


messaging.onBackgroundMessage((payload) => {
    console.log('[firebase-messaging-sw.js] Received background message ', payload);
    // Customize notification here
    const notificationTitle = 'New Reserve BarberShop';
    const notificationOptions = {
        body: 'check the barber shop Panel',
    };

    self.registration.showNotification(notificationTitle,
        notificationOptions);
});