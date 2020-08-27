import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyCXlhKSfoyjySJpm1d8vMc0xop_Rq_85ig",
    authDomain: "hackathon-epoche.firebaseapp.com",
    databaseURL: "https://hackathon-epoche.firebaseio.com",
    projectId: "hackathon-epoche",
    storageBucket: "hackathon-epoche.appspot.com",
    messagingSenderId: "1087386866392",
    appId: "1:1087386866392:web:c91cab885e5575e91e7dad",
    measurementId: "G-MQ61Z47NV7"
  };

  const fire = firebase.initializeApp(firebaseConfig);

  export default fire;