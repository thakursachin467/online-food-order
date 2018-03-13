
$('body').scroll(function(){
    if ($('body').scrollTop() >= 840) {
       $('.secondnav').css("visibility","visible");
       $('.firstnav').css("visibility","hidden");
    }
    else {
       $('.secondnav').css("visibility","hidden");
       $('.firstnav').css("visibility","visible");
    }
});



$(document).ready(function(){

	$('.image-2').mouseover(function(){

		$(this).css("border", "2px solid red");
		$(this).css("box-shadow", "6px 9px #808080");


	});

	$('.image-2').mouseout(function(){

		$(this).css("border", "2px solid black");
		$(this).css("box-shadow", "2px 3px #808080");
	});



});
