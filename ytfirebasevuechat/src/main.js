import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import firebase from "firebase/app";

require("firebase/firestore");
const firebaseConfig = {
    apiKey: "AIzaSyC39phVcCDCwRogDB_PS78PL3kssLGCJmM",
    authDomain: "yt-vue-firebase-chatbox.firebaseapp.com",
    projectId: "yt-vue-firebase-chatbox",
    storageBucket: "yt-vue-firebase-chatbox.appspot.com",
    messagingSenderId: "540343269261",
    appId: "1:540343269261:web:af3a79ac5144c737736fc4",
    // measurementId: "G-41P4YYK3BV"
  };
  firebase.config(firebaseConfig);

createApp(App).use(store).use(router).mount('#app')
