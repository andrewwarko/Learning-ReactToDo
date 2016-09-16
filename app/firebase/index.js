import firebase from 'firebase';

try {
    var config = {
        apiKey: "AIzaSyBEtEKOZF8x-hsrSAGlpKnWBG-OIK8GseU",
        authDomain: "learning-reacttodo.firebaseapp.com",
        databaseURL: "https://learning-reacttodo.firebaseio.com",
        storageBucket: "learning-reacttodo.appspot.com",
        messagingSenderId: "568030940114"
      };
      firebase.initializeApp(config);
} catch(e) {

}

export var firebaseRef = firebase.database().ref();
export default firebase;
