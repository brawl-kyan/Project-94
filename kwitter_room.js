const firebaseConfig = {
    apiKey: "AIzaSyDzHWVINVrawQm6-0GmtsmTZnxEBpFTXQ8",
    authDomain: "kwitter-project-1d89b.firebaseapp.com",
    databaseURL: "https://kwitter-project-1d89b-default-rtdb.firebaseio.com",
    projectId: "kwitter-project-1d89b",
    storageBucket: "kwitter-project-1d89b.appspot.com",
    messagingSenderId: "502765712063",
    appId: "1:502765712063:web:8391d23133f0941a448c0a"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  function addRoom(){
    user_name = document.getElementById("room").value;
    firebase.database().ref("/").child(user_name).update({
     kabir : "hola"   
    });    
    }
  