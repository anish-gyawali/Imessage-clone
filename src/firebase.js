import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyDr1egPr88bCL7sCVv3uXE1z0QEyOZ5Dec",
    authDomain: "imessage-clone-163c0.firebaseapp.com",
    databaseURL: "https://imessage-clone-163c0.firebaseio.com",
    projectId: "imessage-clone-163c0",
    storageBucket: "imessage-clone-163c0.appspot.com",
    messagingSenderId: "862730270227",
    appId: "1:862730270227:web:c5cfd31cf4fb03f2fc71e6",
    measurementId: "G-8X00VVGDDG"
  };

  const firebaseApp=firebase.initializeApp(firebaseConfig);
  const db=firebaseApp.firestore();
  const auth =firebase.auth();
  const provider =new firebase.auth.GoogleAuthProvider();
  export {auth,provider};
  export default db;