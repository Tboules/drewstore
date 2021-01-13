import firebase from "firebase/app";
import "firebase/storage";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAQG8OVmoPIVhDmQa2DtoVg3R6t1gwRdEY",
  authDomain: "drowchet.firebaseapp.com",
  projectId: "drowchet",
  storageBucket: "drowchet.appspot.com",
  messagingSenderId: "554314817577",
  appId: "1:554314817577:web:578a184e9456716e05bc38",
  measurementId: "G-GFJHTXD49Q",
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const storage = firebase.storage();
const auth = firebase.auth();

export { db, storage, auth };
