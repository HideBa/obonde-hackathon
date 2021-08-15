import firebase from "firebase/app";
import "firebase/database";

const config = {
    apiKey: "AIzaSyD83sYxCT4fu0K62Vukyv0bd2LZL-clOCc",
    authDomain: "firechat-d85fe.firebaseapp.com",
    projectId: "firechat-d85fe",
    storageBucket: "firechat-d85fe.appspot.com",
    messagingSenderId: "286652871074",
    appId: "1:286652871074:web:02e9a3bca687b99cfbc2fb"
}

const db = firebase.initializeApp(config);
export default db;