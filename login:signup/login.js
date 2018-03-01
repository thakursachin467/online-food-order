
$(document).ready(function() {
    var urls=["pizza.jpg","burger.jpg","dosa.jpg","dal.jpg"];
    $('body').css({
      'background-image':'url('+urls[0]+')',
      'background-repeat': 'no-repeat',
      'background-size': 'cover'
});
setInterval(function() { 
    for(var i=0;i<urls.length;i++){
      
    $('body').css({
      'background-image':'url('+urls[i]+')',
      'background-repeat': 'no-repeat',
      'background-size': 'cover'
}); 

    }
}, 3000);
    


});

function passwordvalidation() {
var password=document.getElementById('signuppas').value;
var password2=document.getElementById('signuppas2').value;
if(password2!=password) {
  alert("your password did not match");
  $('#signuppas').focus();
}
}

  var config = {
    apiKey: "AIzaSyB075Pk8Zs-vLk1deutDMcGKuxkcURjidA",
    authDomain: "online-food-order-758b0.firebaseapp.com",
    databaseURL: "https://online-food-order-758b0.firebaseio.com",
    projectId: "online-food-order-758b0",
    storageBucket: "online-food-order-758b0.appspot.com",
    messagingSenderId: "908019907590"
  };
  firebase.initializeApp(config);



  firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    document.getElementById('loginpage').style.display="none";
    document.getElementById('signed').style.display="block";
    

  } else {
   
    document.getElementById('loginpage').style.display="block";
    document.getElementById('signed').style.display="none";
    
  }
});

  function createuser() {

    var password=document.getElementById('signuppas').value;
    var email=document.getElementById('signupemail').value;
    window.alert(password);
    firebase.auth().createUserWithEmailAndPassword(email, password);
  }


  function login() {
    var password=document.getElementById('password').value;
    var email=document.getElementById('email').value;
    var name=document.getElementById('firstname').value;
    firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
  // Handle Errors here.
  var errorCode = error.code;
  var errorMessage = error.message;
  // ...

  window.alert(errorMessage);
  

});

  }

 function logout() {

  firebase.auth().signOut();

 }



