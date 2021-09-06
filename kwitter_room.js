
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

    user_name = localStorage.getItem("user_name");

document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

function addRoom()
{
  room_name = document.getElementById("room_name").value;

  firebase.database().ref("/").child(room_name).update({
    purpose : "adding room name"
  });

    localStorage.setItem("room_name", room_name);
    
    window.location = "kwitter_page.html";
}

function getData() {  firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key;
       Room_names = childKey;
       console.log("Room Name - " + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row;
    });
  });

}

getData();
function redirectToRoomName(name){
console.log(name);
localStorage.setItem("room_name", name);
window.location="kwitter_page.html";
}
function logout(){
  localStorage.removeItem("room_name");
  localStorage.removeItem("user_name");
  window.location="index.html";
}
