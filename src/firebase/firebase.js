import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyB2RLvlxtAzQtI1y4eSLSx6kxh0ZSTNuWk",
    authDomain: "todo-app-17f63.firebaseapp.com",
    projectId: "todo-app-17f63",
    storageBucket: "todo-app-17f63.appspot.com",
    messagingSenderId: "821387456152",
    appId: "1:821387456152:web:c841df4abb7f87511caaed",
    measurementId: "G-VG1KBMM4EP"
  };

  firebase.initializeApp(firebaseConfig)

  const database = firebase.database()

  export { firebase, database }