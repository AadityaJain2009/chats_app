


var firebaseConfig = {
      apiKey: "AIzaSyCi-2D04Z-AGlvq9FouTTyqpq-lTlT_Sh8",
      authDomain: "let-s-chat-app-88489.firebaseapp.com",
      databaseURL: "https://let-s-chat-app-88489-default-rtdb.firebaseio.com",
      projectId: "let-s-chat-app-88489",
      storageBucket: "let-s-chat-app-88489.appspot.com",
      messagingSenderId: "625985593232",
      appId: "1:625985593232:web:789a7f60cf5edd83ff9d15"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

    user_name = localStorage.getItem("user_name");
    document.getElementById("user_name").innerHTML = "welcome" + user_name + "!!";

    function addRoom(){
      room_name  = document.getElementById("room_name").value;

      firebase.database().ref("/").child(room_name).update({
            purpose : "Adding room name "
      });
      localStorage.setItem("room_name" , room_name);

      window.location = "kwitter_page.html";
    }

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
       row = "<div class='room_name' id="+Room_names+"onclick='change_room(this.id)'>" + Room_names +"</div><hr>" ;
       document.getElementById("output").innerHTML+=row;
       //End code
      });});}
getData();

function change_room(name){
      localStorage.setItem("room_name" , name);
      window.location = "kwitter_page.html";
}

function back(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location ="kwitter_page.html";
}
