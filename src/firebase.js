import firebase from "firebase/app";
import "firebase/analytics";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDR7RFQKlthRtrniDozlSmbE0NJBwsu9ao",
  authDomain: "ghuri-movie-website.firebaseapp.com",
  projectId: "ghuri-movie-website",
  storageBucket: "ghuri-movie-website.appspot.com",
  messagingSenderId: "967768924736",
  appId: "1:967768924736:web:0ce572ce193379e7d9f5a5",
  measurementId: "G-6DLXLR9905"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = firebaseApp.firestore();

export { auth };

export default db;