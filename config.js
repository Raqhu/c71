import firebase from "firebase";
require("@firebase/firestore");

const firebaseConfig = {
  apiKey: "AIzaSyBOzMap6CFiX-zrY36E3nPHPXY5HJUJpBw",
  authDomain: "class71-4c087.firebaseapp.com",
  projectId: "class71-4c087",
  storageBucket: "class71-4c087.appspot.com",
  messagingSenderId: "928427488535",
  appId: "1:928427488535:web:7a7ff857cc0ac462fbf352"
};

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
