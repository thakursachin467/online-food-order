$(document).ready(function() {
    var urls=["pizza.jpg","burger.jpg","dosa.jpg","dal.jpg"];
    $('body').css({
      'background-image':'url('+urls[0]+')',
      'background-repeat': 'no-repeat',
      'background-size': 'cover'
});
setInterval(function() { 
    for(var i=0;i<urls.length;i++){
      console.log(urls[i]);
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
