import * as firebase from 'firebase';
import '@firebase/auth'
import '@firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyBySd2CLr4t587mvPmwAderfOf9vm2i5RA",
    authDomain: "patienttracker-8a8f0.firebaseapp.com",
    projectId: "patienttracker-8a8f0",
    storageBucket: "patienttracker-8a8f0.appspot.com",
    messagingSenderId: "194909058146",
    appId: "1:194909058146:web:993b706208667ef220cd3b",
    measurementId: "G-GZTG3WGXLZ"
  };

if(!firebase.apps.length){
    firebase.initializeApp(firebaseConfig);
}
export {firebase};