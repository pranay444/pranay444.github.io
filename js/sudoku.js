$(document).ready(function(){

	onResizeHandler();

	$(window).on('resize', function(){
			onResizeHandler();
	});

});

function onResizeHandler(){
	$('body').removeClass('large medium small');
	$('body').addClass(screenMode());
	
}
function screenMode(){
	screenSize ={
		"medium": 768,
		"large": 1024
	};
	var width = $(window).width();
	if(width < screenSize.medium){
			return 'small';
	}else if(width  >= screenSize.medium && width < screenSize.large){
		return 'medium';
	}else{
		return 'large';
	}
}