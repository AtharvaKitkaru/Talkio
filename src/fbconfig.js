import firebase from "firebase";
// import firestore from "firebase/firestore";

const app = firebase.initializeApp({
  apiKey: "AIzaSyBmDYViSp6gyW2jODsmiO_Nj9loa_VcAxs",
  authDomain: "talkio-82efd.firebaseapp.com",
  projectId: "talkio-82efd",
  storageBucket: "talkio-82efd.appspot.com",
  messagingSenderId: "157639179794",
  appId: "1:157639179794:web:c31e8827249b46f395e2cb",
  measurementId: "G-B7HM811T43",
});

export const auth = firebase.auth();
export const db = firebase.firestore();

export default app;
