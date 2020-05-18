import React from 'react';
import ReactDOM from 'react-dom';

// import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

const firebase = require('firebase');
require('firebase/firestore');

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDp69kbtuqhHU1RFFPjudKzCOzAWSPkxeU",
  authDomain: "no-pad.firebaseapp.com",
  databaseURL: "https://no-pad.firebaseio.com",
  projectId: "no-pad",
  storageBucket: "no-pad.appspot.com",
  messagingSenderId: "145117556594",
  appId: "1:145117556594:web:0e8648c111cdecbd6db7eb",
  measurementId: "G-14JQ9F0NJG"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();


ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
