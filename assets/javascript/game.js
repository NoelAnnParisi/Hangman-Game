var options = ["nickelodeon", "baywatch", "friends"];
var wins = 0;
var currentWord;
var currentWordArr;
var alreadyguessed = [];
var correctlyGuessed = [];
var guessesremaining = 13;

	document.onkeyup = function(event) {

		var userGuess = event.key;
		console.log("You chose "+ userGuess); 
		alreadyguessed.push(userGuess);
		console.log(alreadyguessed);

		var computerChoose = function() {
			return options[Math.floor(Math.random() * options.length)];
		}

		currentWord = computerChoose();
		currentWordArr = currentWord.split("")

		console.log(currentWordArr);

		for (i=0; i < currentWordArr.length; i ++) {
			if (userGuess === currentWordArr[i]) {
				correctlyGuessed.push(userGuess);
				console.log(correctlyGuessed);
			}
		}
	}
//create an array to contain the guessed letter
//create an array to contain the letters guessed that're in the winning word
//split the word choosen by the computer into an array 
//compare the array with the user input
//decrease the number of guesses remaining by one each time a letter in typed 
	// if the letter typed has already been used do not decrease the # of guesses 
// 
