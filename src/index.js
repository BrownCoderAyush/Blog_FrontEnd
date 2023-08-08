import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { getAuth, signOut } from "firebase/auth";

import { initializeApp } from "firebase/app";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBO72S40NhwcEfmUIW-gfmFMizs0Hm9y3Q",
  authDomain: "blogwebsite-bcfd3.firebaseapp.com",
  projectId: "blogwebsite-bcfd3",
  storageBucket: "blogwebsite-bcfd3.appspot.com",
  messagingSenderId: "95829678213",
  appId: "1:95829678213:web:7be0727087539ef550f1ec"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const auth = getAuth();
// signOut(auth).then(() => {
//     console.log("signout")
// }).catch((error) => {
//   console.log("not sign out");
// });



const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  // <React.StrictMode>
  
    <BrowserRouter>
    <App />
    </BrowserRouter>
  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

