# pranay444.github.io
Sudoku

I have provided you a fully functional Sudoku game where you can reset, check and solve the game at any time.

By default this game is loaded and set to an easy level, but if you want to approach different levels then simply click on any of the game levels listed on the bottom of the board.
If you are not aware of sudoku and need a tutorial please refer http://www.instructables.com/id/Sudoku%3Asolving-it-for-beginners-and-the-expirience/

All the puzzle sets are taken from http://www.nikoli.com/en/puzzles/sudoku/




Design Decisions

1)Use of javascript function instead of css media query for responsiveness
	This was done to keep in mind cross-rowser compatibility upto IE8

2)Use of global variable
	I have encapsulated the global variable into one global object providing name spacing, I wanted to have the state of the object to be global so that it is easily extendable across multiple state.

3) Use of jQuery for DOM manipulation


Improvement

1) Better user interaction mostly when entered a wrong input.
2) Timer, for user to be aware of time required to solve the puzzle, Time bound puzzle
3) Multiple boards for each level instead of current 1 for each.
4) Better animation
5) Hint Functionality

you can get intouch with me at pranay.vadel@gmail.com