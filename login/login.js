 var config = {
    apiKey: "AIzaSyB075Pk8Zs-vLk1deutDMcGKuxkcURjidA",
    authDomain: "online-food-order-758b0.firebaseapp.com",
    databaseURL: "https://online-food-order-758b0.firebaseio.com",
    projectId: "online-food-order-758b0",
    storageBucket: "online-food-order-758b0.appspot.com",
    messagingSenderId: "908019907590"
  };

  firebase.initializeApp(config);
  var provider = new firebase.auth.GoogleAuthProvider();
  var provider1 = new firebase.auth.FacebookAuthProvider();
  var provider2 = new firebase.auth.TwitterAuthProvider();



$(document).ready(function() {
    var urls=["login/pizza.jpg"];
    $('body').css({
      'background-image':'url('+urls[0]+')'
    });




});

function passwordvalidation() {
var password=document.getElementById('signuppas').value;
var password2=document.getElementById('signuppas2').value;
if(password2!=password) {
  alert("your password did not match");
  $('#signuppas').focus();
}
}

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
    firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
  // Handle Errors here.
  var errorCode = error.code;
  var errorMessage = error.message;
  alert(errorMessage);
  // ...
});

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


 function googlelogin() {

firebase.auth().signInWithRedirect(provider).then(function(result) {
  // This gives you a Facebook Access Token. You can use it to access the Facebook API.
  var token = result.credential.accessToken;
  // The signed-in user info.
  var user = result.user;
  // ...
}).catch(function(error) {
  // Handle Errors here.
  var errorCode = error.code;
  var errorMessage = error.message;
  // The email of the user's account used.
  var email = error.email;
  // The firebase.auth.AuthCredential type that was used.
  var credential = error.credential;
  alert(errorMessage);
  // ...
});

}


function facebooksignin() {
  firebase.auth().signInWithPopup(provider1).then(function(result) {
  // This gives you a Facebook Access Token. You can use it to access the Facebook API.
  var token = result.credential.accessToken;
  // The signed-in user info.
  var user = result.user;
  // ...
}).catch(function(error) {
  // Handle Errors here.
  var errorCode = error.code;
  var errorMessage = error.message;
  // The email of the user's account used.
  var email = error.email;
  // The firebase.auth.AuthCredential type that was used.
  var credential = error.credential;
  alert(errorMessage);
  // ...
});
}

function twittersignin() {
  firebase.auth().signInWithPopup(provider2).then(function(result) {
  // This gives you a the Twitter OAuth 1.0 Access Token and Secret.
  // You can use these server side with your app's credentials to access the Twitter API.
  var token = result.credential.accessToken;
  var secret = result.credential.secret;
  // The signed-in user info.
  var user = result.user;
  // ...
}).catch(function(error) {
  // Handle Errors here.
  var errorCode = error.code;
  var errorMessage = error.message;
  // The email of the user's account used.
  var email = error.email;
  // The firebase.auth.AuthCredential type that was used.
  var credential = error.credential;
  alert(errorMessage);
  // ...
});
}
