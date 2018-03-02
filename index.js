$(window).scroll(function(){
    if ($(window).scrollTop() >= 840) {
       $('.secondnav').css("visibility","visible");
       $('.firstnav').css("visibility","hidden");
    }
    else {
       $('.secondnav').css("visibility","hidden");
       $('.firstnav').css("visibility","visible");
    }
});