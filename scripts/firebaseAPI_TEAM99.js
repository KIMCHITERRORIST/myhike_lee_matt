//----------------------------------------
//  Your web app's Firebase configuration
//----------------------------------------
var firebaseConfig = {
    apiKey: "AIzaSyAIwnpChsc_MQLcj4DWiWRxvnij6HdJr4s",
    authDomain: "comp1800-202410-demo-1a515.firebaseapp.com",
    projectId: "comp1800-202410-demo-1a515",
    storageBucket: "comp1800-202410-demo-1a515.appspot.com",
    messagingSenderId: "560547015705",
    appId: "1:560547015705:web:cbd0754b4649c9dc71ce88"
};

//--------------------------------------------
// initialize the Firebase app
// initialize Firestore database if using it
//--------------------------------------------
const app = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const storage = firebase.storage();
