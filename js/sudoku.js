
sudoku ={
	'inputtext':  ["input1", "input2", "input3", "input4", "input5", "input6", "input7", "input8", "input9", "input10", "input11", "input12", "input13", "input14", "input15", "input16", "input17", "input18", "input19", "input20", "input21", "input22", "input23", "input24", "input25", "input26", "input27", "input28", "input29", "input30", "input31", "input32", "input33", "input34", "input35", "input36", "input37", "input38", "input39", "input40", "input41", "input42", "input43", "input44", "input45", "input46", "input47", "input48", "input49", "input50", "input51", "input52", "input53", "input54", "input55", "input56", "input57", "input58", "input59", "input60", "input61", "input62", "input63", "input64", "input65", "input66", "input67", "input68", "input69", "input70", "input71", "input72", "input73", "input74", "input75", "input76", "input77", "input78", "input79", "input80", "input81"],
	'problem':  "800500614300000002169074050045020000903000040621008900008100000400060000000039800",
	'solution':  "872593614354681792169274358745926783983715246621348975238157469497862531516439827"
}
$(document).ready(function(){

	onResizeHandler();

	$(window).on('resize', function(){
			onResizeHandler();
	});

	$('#reset').on('click',function(){
		reset();
	});
	$('#check').on('click',function(){
		
	});
	$('#solve').on('click',function(){
		solve();
	});
	$('.box').find('input').on('blur',function(){
		invalid(this);
	});
	

	reset();

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

function reset(){
	for (var i = 0; i < sudoku.inputtext.length; i++) {
							var inputtext2 = document.getElementById(sudoku.inputtext[i]);
							var problem2 = sudoku.problem[i];
							// CHECKING IF A VALUE IS 0 THEN LEAVE THE TEXT FIELD EMPTY
							if (problem2 == "0") {
								inputtext2.value = "";
							} else {
								inputtext2.value = problem2;
							}
							//
						}
}

function solve() {
	for (var i = 0; i < sudoku.inputtext.length; i++) {
		var inputtext2 = document.getElementById(sudoku.inputtext[i]);
		var solution2 = sudoku.solution[i];
		
		inputtext2.value = solution2;
		
	}
}

function invalid(inputtext) {
	
	var regexp = new RegExp("[1-9]");
	// IF VALUE IS 1-9
	if (regexp.test(inputtext.value) || inputtext.value =='' ) {
		//
	// IF VALUE IS NOT 1-9
	} else if (!regexp.test(inputtext.value)) {
		// ASSIGNING AN EMPTY VALUE TO THE ASSOCIATED FIELD
		inputtext.value = "";
		alert("Use numbers from 1 to 9.");
	}
}