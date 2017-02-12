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

		var guessesLeft = function guessesLeft(guessesremaining) {
	  		htmlReplacer("#guessesremaining", guessesremaining);
	  	};

		var guessedLetters = function guessedLetters(letter, alreadyguessed) {
			if (alreadyguessed.length === 0 && !currentWordArr.includes(letter)) {
				alreadyguessed.push(letter);
				htmlReplacer("#alreadyguessed", alreadyguessed);
				guessesremaining -= 1;
			}
			guessesLeft(guessesremaining);
		};
			
		var guessedLettersrepeat = function guessedLettersrepeat (letter, alreadyguessed) {
			if (alreadyguessed.length >= 1 && !alreadyguessed.includes(letter) && !currentWordArr.includes(letter)) {
				alreadyguessed.push(letter);
				htmlReplacer("#alreadyguessed", alreadyguessed);
				guessesremaining -= 1;
			}
			guessesLeft(guessesremaining);
		};
			
	  	var displayWord = function displayWord(currentWordArr, correctlyGuessed) {
	  		for(let i = 0; i < currentWordArr.length;i++) {
	  			if (letter === currentWordArr[i]) {
	  				correctlyGuessed.splice(currentWordArr.indexOf(letter, [i]), 1, letter);
					htmlReplacer("#correctlyGuessed", correctlyGuessed);
	  			}
	  		}
	  	};

	  	var winStats = function winStats(currentWordArr, correctlyGuessed, wins) {
	  		if (currentWordArr === correctlyGuessed) {
	  			wins += 1;
	  			htmlReplacer("#wins", wins);
	  		}
	  	};

	  	guessesLeft(guessesremaining); 
	  	guessedLetters(letter, alreadyguessed);
	  	guessedLettersrepeat(letter, alreadyguessed);
	  	displayWord(currentWordArr, correctlyGuessed);
	  	winStats(currentWordArr, correctlyGuessed, wins);
	};

