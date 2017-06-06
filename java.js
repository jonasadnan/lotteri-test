/**
 * Created by adnan on 30/05/2017.
 */

var lotteryNumbers = 100;
var arr = new Array();
$('.next-ball').on('click', function(){

	var random = Math.floor(Math.random()*lotteryNumbers);
	console.log(random);
	console.log($.inArray(random, arr));
	if($.inArray(random, arr) < 0){
		arr.push(random);

		$('#ball' + arr.length).addClass('animated');
		$('#ball' + arr.length).addClass('zoomInDown');

		$('#ball' + arr.length).text(random);
		$('#ball' + arr.length).show();

	} else {
		showAlert();
	}
	console.log(arr);
	if ( arr.length > 5 ) {

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

	arr = [];

	$('.ball').hide();

	//bouncing out the play-again button
	$('.play-again').removeClass('bounceInRight');
	$('.play-again').addClass('bounceOutRight');

	//waits 2 seconds before hiding play-again button
	setTimeout(function(){
		$('.play-again').hide();
		$('.play-again').removeClass('bounceOutRight');
	}, 2000);

	$('.next-ball').show();
	$('.next-ball').addClass('bounceInLeft');
	$('.next-ball').addClass('animated');


});


function showAlert() {
	$('.alert.alert-info').show();

	//starting fadeout
	setTimeout(function () {
		$('.alert.alert-info').addClass('animated');
		$('.alert.alert-info').addClass('fadeOut');
	}, 1500);

	setTimeout(function () {
		$('.alert.alert-info').hide();
	}, 3000);

	//removing animation class
	setTimeout(function () {
		$('.alert.alert-info').removeClass('animated');
		$('.alert.alert-info').removeClass('fadeOut');
	}, 3000);
}
