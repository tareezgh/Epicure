import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import store from "./redux/store";

import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyDrcQldLMxqBj38O990KS4uyMF7daMKtYo",
  authDomain: "epicureclient-f8b92.firebaseapp.com",
  projectId: "epicureclient-f8b92",
  storageBucket: "epicureclient-f8b92.appspot.com",
  messagingSenderId: "946192258252",
  appId: "1:946192258252:web:0015898350d87f72c29e69",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const app = firebase.initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <Provider store={store}>
    {/* <React.StrictMode> */}
    <App />
    {/* </React.StrictMode> */}
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
