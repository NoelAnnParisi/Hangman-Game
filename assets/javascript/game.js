var options = ["nickelodeon", "baywatch", "friends","goosebumps", "fullhouse", "rugrats"];
var wins = 0;
var alreadyguessed = [];
var correctlyGuessed = [];
var guessesremaining = 13;
var computerChoose = function() {
		return options[Math.floor(Math.random() * options.length)];
	};
var currentWord = computerChoose();
var currentWordArr = currentWord.split("");
correctlyGuessed.length = currentWordArr.length;

var htmlReplacer = function htmlReplacer (id, html) {
	document.querySelector(id).innerHTML = html;
}

console.log(currentWordArr);

	document.onkeyup = function(event) {
		var letter = event.key;
		console.log(letter);
		console.log("You chose "+ letter); 

		var guessedLetters = function guessedLetters(letter, alreadyguessed) {
			if (alreadyguessed.length === 0 && !currentWordArr.includes(letter)) {
				alreadyguessed.push(letter);
				htmlReplacer("#alreadyguessed", alreadyguessed);
			}
		};
			
		var guessedLettersrepeat = function guessedLettersrepeat (letter, alreadyguessed) {
			if (alreadyguessed.length >= 1 && !alreadyguessed.includes(letter) && !currentWordArr.includes(letter)) {
				alreadyguessed.push(letter);
				htmlReplacer("#alreadyguessed", alreadyguessed);
			}
		};
			
	  	var displayWord = function displayWord(currentWordArr, correctlyGuessed) {
	  		for(let i = 0; i < currentWordArr.length;i++) {
	  			if (letter === currentWordArr[i]) {
	  				correctlyGuessed.splice(currentWordArr.indexOf(letter, [i]), 1, letter);
					htmlReplacer("#correctlyGuessed", correctlyGuessed);
	  			}
	  		}
	  	};

	  	// inCorrectWord(letter, currentWordArr, alreadyguessed);
	  	guessedLetters(letter, alreadyguessed);
	  	guessedLettersrepeat(letter, alreadyguessed);
	  	displayWord(currentWordArr, correctlyGuessed); 
	}

