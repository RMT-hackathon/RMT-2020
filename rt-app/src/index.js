import React from 'react';
import ReactDOM from 'react-dom';
import './style/base.scss'
import App from './App';
import firebase from 'firebase';

firebase.initializeApp({
    apiKey: "AIzaSyA7uHdcfffw6soDjBTR6qHu6KWFCM6HL5U",
    authDomain: "rmt-hackathon.firebaseapp.com",
    databaseURL: "https://rmt-hackathon.firebaseio.com",
    projectId: "rmt-hackathon",
    storageBucket: "rmt-hackathon.appspot.com",
    messagingSenderId: "844867804662",
    appId: "1:844867804662:web:bd3d66b042ecfeab507bd7",
    measurementId: "G-28NPCYYCXF"
  })

ReactDOM.render(<App />, document.getElementById('root'));

