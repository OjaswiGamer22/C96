var firebaseConfig = {
    apiKey: "AIzaSyAeOeP5SA47MgDuhW3SP3fwyNel9cWs6Xs",
    authDomain: "practice-34d02.firebaseapp.com",
    databaseURL: "https://practice-34d02-default-rtdb.firebaseio.com",
    projectId: "practice-34d02",
    storageBucket: "practice-34d02.appspot.com",
    messagingSenderId: "559108009475",
    appId: "1:559108009475:web:4b80a4204a7749cb752836"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  user_name=localStorage.getItem("user_name");
  room_name=localStorage.getItem("room_name");

  function send(){
      msg=document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
         name:user_name,
         message:msg,
         like:0 
      });
      document.getElementById("msg").value="  ";
  }


function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
    firebase_message_id = childKey;
    message_data = childData;
//Start code

//End code
 } });  }); }
getData();
function logout(){
    localStorage.removeItem("room_name");
    localStorage.removeItem("user_name");
    window.location="index.html";
  }