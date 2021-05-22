
//ADD YOUR FIREBASE LINKS HERE
// Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyAUZ-kPRQrVOy8lKV30YSJsGO4DfZ6mloA",
    authDomain: "kwitter-d01d9.firebaseapp.com",
    projectId: "kwitter-d01d9",
    storageBucket: "kwitter-d01d9.appspot.com",
    messagingSenderId: "1061730778416",
    appId: "1:1061730778416:web:b36611e10eb133fc5f5cf5"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
