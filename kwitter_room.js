
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBMSwUOXMfMWiWFPzu7sysHRClT3Eur26A",
  authDomain: "class-test-635ba.firebaseapp.com",
  databaseURL: "https://class-test-635ba-default-rtdb.firebaseio.com",
  projectId: "class-test-635ba",
  storageBucket: "class-test-635ba.appspot.com",
  messagingSenderId: "86097918167",
  appId: "1:86097918167:web:afc4a46611d94f144cd892",
  measurementId: "G-YYH373WBX0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

function addUser()
{
    user_name = document.getElementById("username").value;
    firebase.database().ref("/").child("user_name").update({
        purpose : "adding user"
    });
}
function addRoom()
{
  room_name = document.getElementById("room_name").value;

  firebase.database().ref("/").child(room_name).update({
    purpose : "adding room name"
  });

  localStorage.setItem("room_name" , room_name);

  window.location = "kwitter_page.html";
}
function addRoom()
{
  room_name = document.getElementById("room_name").value;

  firebase.database().ref("/").child(room_name).update({
    purpose : "adding room name"
  });

  localStorage.setItem("room_name" , room_name);
  window.location = "kwitter_page.html";
}
function getData(){firebase.database().ref("/").on('vlaue', function(snapshot) {document.getElementById("output").innerHTML})}
 Room_names = childKey;

 console.log("Room_Name -" + Room_names);
 row = "<div class-='room_name' id="+Room_names+" onclick='redireactToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
 document.getElementById("output").innerHTML += row;

 function redireactToRoomName(name)
 {
  console.log(name);
  localStorage.setItem("room_name" , name);
    window.location = "kwitter_page.html";
 }