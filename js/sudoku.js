
sudoku ={
	'inputtext':  ["input1", "input2", "input3", "input4", "input5", "input6", "input7", "input8", "input9", "input10", "input11", "input12", "input13", "input14", "input15", "input16", "input17", "input18", "input19", "input20", "input21", "input22", "input23", "input24", "input25", "input26", "input27", "input28", "input29", "input30", "input31", "input32", "input33", "input34", "input35", "input36", "input37", "input38", "input39", "input40", "input41", "input42", "input43", "input44", "input45", "input46", "input47", "input48", "input49", "input50", "input51", "input52", "input53", "input54", "input55", "input56", "input57", "input58", "input59", "input60", "input61", "input62", "input63", "input64", "input65", "input66", "input67", "input68", "input69", "input70", "input71", "input72", "input73", "input74", "input75", "input76", "input77", "input78", "input79", "input80", "input81"],
	'problem_easy'		:"002040070090001420060008003500001003000060000300500006100600020057900080040020100",			  
	'solution_easy' 	:"312946875598731426764258913567481293842369175391572486138654729257913684649827135",
	'problem_medium'	:"900000002008120000100090703007020400001030200009060800109040005000073800200000006",
	'solution_medium'	:"974358612368127594152694783567821493481739256329465871189246735645973812237518946",
	'problem_hard'		:"000206000000300008300004090007000305000409000602000700080900004500003000000406000",
	'solution_hard'		:"849256731752391648361874295497628315135479286682513749183972564564813927927456138",
	'problem'			:"",
	'solution'			:"",
	'level'				:"easy"

}
$(document).ready(function(){

	onResizeHandler();
	

	$(window).on('resize', function(){
			onResizeHandler();
	});

	$('#reset').on('click',function(){
		setLevel(sudoku.level);
		reset();
	});
	$('#check').on('click',function(){
		check();
	});
	$('#solve').on('click',function(){
		solve();
	});
	$('.box').find('input').on('blur',function(){
		invalid(this);
	});
	
	
	var parameter = document.location.search.replace("?", "").replace("=", "");
	if(!parameter){
		parameter = 'easy';
	}

	setNav(parameter);
	
	setLevel(sudoku.level);
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
	setLevel(sudoku.level);
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

function check(){
	var inputText4 ='';
	for(var i =0;i< $('.box').find('input').length;i++)
		{ 
			
			inputText4 = inputText4+$('.box').find('input').eq(i).val();

		}
		if(inputText4 === sudoku.solution){
			alert('CONGRATULATIONS');
		}
		else{
			alert('Incorrect ---> Please try again');
		}
}

function setLevel(level){
	if(level ==='medium'){
		sudoku.problem = sudoku.problem_medium;
		sudoku.solution = sudoku.solution_medium;

	} else if(level ==='hard'){
		sudoku.problem = sudoku.problem_hard;
		sudoku.solution = sudoku.solution_hard;
	}else{
		sudoku.problem = sudoku.problem_easy;
		sudoku.solution = sudoku.solution_easy;
	}

}

function setNav(parameter){
	
	$('.nav a').removeClass('active');
		$('.nav li.'+parameter).find('a').addClass('active');
		sudoku.level = parameter;
		reset();
}