/**
 * Created by adnan on 30/05/2017.
 */
var arr = new Array();
$('.next-ball').on('click', function(){

	var random = Math.floor(Math.random()*100);
	console.log(random);
	if( arr.indexOf(random) < 1){
		arr.push(random);
		$('.lottery').append('<li class="lottery-ball">' + random + '</li>');
	} else {
		$('.alert').show();

		setTimeout(function () {
			$('.alert').show();
		}, 3000);
	}
	console.log(arr);
	if ( $('.lottery').children().length > 5 ) {

		$('.next-ball').addClass('bounceOutLeft');
		$('.next-ball').addClass('animated');

		setTimeout(function(){
			$('.next-ball').hide();
			$('.play-again').removeClass('bounceOutRight');
		}, 1000);


		$('.play-again').show();


		setTimeout(function () {
			$('.next-ball').removeClass('bounceOutLeft');
			$('.next-ball').removeClass('animated');
		}, 1000);

		$('.play-again').addClass('bounceInRight');
		$('.play-again').addClass('animated');

	}

});
$('.play-again').on('click', function(){
	//bouncing out the play-again button
	$('.play-again').removeClass('bounceInRight');
	$('.play-again').addClass('bounceOutRight');

	//waits 2 seconds before hiding play-again button
	setTimeout(function(){
		$('.play-again').hide();
		$('.play-again').removeClass('bounceOutRight');
	}, 2000);

	$('.lottery').children().remove();
	arr = [];

	$('.next-ball').show();
	$('.next-ball').addClass('bounceInLeft');
	$('.next-ball').addClass('animated');


});

