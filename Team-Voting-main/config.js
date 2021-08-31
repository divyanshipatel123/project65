import firebase from 'firebase';

// add SDK Firebase
//added the sdk file
var firebaseConfig = {
    apiKey: "AIzaSyC89nZ2CmKdalVtSlzaaXlyumkqf1hOs84",
    authDomain: "voting-app-project-58791.firebaseapp.com",
    databaseURL: "https://voting-app-project-58791-default-rtdb.firebaseio.com",
    projectId: "voting-app-project-58791",
    storageBucket: "voting-app-project-58791.appspot.com",
    messagingSenderId: "527544046980",
    appId: "1:527544046980:web:e647f1572cbd0bc4e679d1",
    measurementId: "G-9TG5WGJD9T"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();