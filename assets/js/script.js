$(function(){
    $('#gauche').click(function() {
  		$('#carre').animate({
  		'marginLeft' : "-=10px" //moves left
  		});
  	});
  	$('#droite').click(function() {
  		$('#carre').animate({
  		'marginLeft' : "+=10px" //moves right
  		});
  	});
  	$('#bas').click(function() {
  		$('#carre').animate({
  		'marginTop' : "+=10px" //moves down
  		});
  	});
  	$('#haut').click(function() {
  		$('#carre').animate({
  		'marginTop' : "-=10px" //moves up
  		});
  });
});
