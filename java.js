/**
 * Created by adnan on 30/05/2017.
 */
var arr = new Array();
$('.next-ball').on('click', function(){
	var random = Math.floor(Math.random()*10);
	console.log(random);
	if( arr.indexOf(random) < 1){
		arr.push(random);
		$('.lottery').append('<li class="lottery-ball">' + random + '</li>');
	} else {
		alert(random + ' has already been picked, go again.');
	}
	console.log(arr);
	if ( $('.lottery').children().length > 5 ) {
		$('.next-ball').hide();
		$('.play-again').show();
	}


});
$('.play-again').on('click', function(){
	$('.lottery').children().remove();
	arr = [];
	$('.next-ball').show();
	$('.play-again').hide();
});
