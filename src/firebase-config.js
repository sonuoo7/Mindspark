import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBeQHfgoWN6xRHC4e_Cf57juqPeAjRU4rk",
  authDomain: "mindspark-db955.firebaseapp.com",
  databaseURL: "https://mindspark-db955-default-rtdb.firebaseio.com",
  projectId: "mindspark-db955",
  storageBucket: "mindspark-db955.appspot.com",
  messagingSenderId: "608270208973",
  appId: "1:608270208973:web:69781ac52ca52ed111fe84",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export { db, auth };