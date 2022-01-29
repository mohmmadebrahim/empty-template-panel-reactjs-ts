import React from "react";
import firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/storage';
import app from "firebase";
// import myAudio from "../assets/notif.mp3"


const audi = document.createElement("audio")
// audi.src = myAudio


const config = {
    apiKey: "AIzaSyCccl6aPs1g84E3fDNEdnK28k_yT5zlMAs",
    authDomain: "chaleebarber.firebaseapp.com",
    projectId: "chaleebarber",
    storageBucket: "chaleebarber.appspot.com",
    messagingSenderId: "863173882194",
    appId: "1:863173882194:web:0f3d322ae254a28cf10a8b",
    measurementId: "G-QB5VGKJ4HQ"
};

export default function FireBase() {
    const fireBaseRegistered = sessionStorage.getItem("fireBaseRegistered")
    if (fireBaseRegistered === "true") return
    if (firebase.apps.length === 0) {
        app.initializeApp(config);
        const messaging = firebase.messaging();
        Notification.requestPermission()
            .then(function () {
                return messaging.getToken();
            })
            .then(async function (tokenFire) {
                console.log("Fire_base implemented")
                const PostData = {
                    "fireToken": tokenFire
                }
                // implement an ai to register firebase key

            })
            .catch(function (err) {
                console.log('Error Occurred.' + err);
                localStorage.setItem("Not_Status_Check", "0");
            });
        messaging.onMessage((payload) => {
            console.log("New Notification from FireBase *********************************************");
            // audi.play();
        });
    }
}
