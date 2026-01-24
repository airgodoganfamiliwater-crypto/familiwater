importScripts('https://www.gstatic.com/firebasejs/9.23.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/9.23.0/firebase-messaging-compat.js');

firebase.initializeApp({
  apiKey: "AIzaSyCl13_a4x-BQnWNUjf9JOQX1DKc-HxLBys",
  authDomain: "klien-39696.firebaseapp.com",
  projectId: "klien-39696",
  storageBucket: "klien-39696.appspot.com",
  messagingSenderId: "434516298894",
  appId: "1:434516298894:web:fad97694415bd4237acddf"
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage(function(payload) {
  console.log('[FCM] BG message:', payload);

  const notification = payload.notification || {};
  const title = notification.title || "Famili Water";
  const body = notification.body || payload.data.body || "Ada pesan baru";

  self.registration.showNotification(title, {
    body: body,
    icon: '/ikon-512.png',
    badge: '/ikon-512.png',
    image: notification.image || null,
    data: payload.data || {}
  });
});

self.addEventListener('notificationclick', function(event) {
  event.notification.close();
  event.waitUntil(clients.openWindow('/'));
});