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
console.log(correctlyGuessed)
console.log(currentWordArr);

	document.onkeyup = function(event) {
		var userGuess = event.key;
		var letter = userGuess;
		console.log(letter);
		console.log("You chose "+ userGuess); 

		//trying to find out a way to get duplicated letters indices
		//should the 1 in my splice be 0
	  		for(i = 0; i < currentWordArr.length;i++){
	  			if (letter === currentWordArr[i]){
	  				correctlyGuessed.splice(currentWordArr.indexOf(letter, [i]), 1, letter);
					console.log(correctlyGuessed);
	  			}
	  		}


	  	//how will I get a repeated letter not to count? 
  		if userGuess === letter {
  			alreadyguessed.push(letter);
	  		console.log(alreadyguessed);
  		}

  		//Think about how to tally up the wins and already guessed letters
  		//How to get all of this to display on my html page 
	  		

  	}
//create an array to contain the guessed letter
//create an array to contain the letters guessed that're in the winning word
//split the word choosen by the computer into an array 
//compare the array with the user input
//decrease the number of guesses remaining by one each time a letter in typed 
	// if the letter typed has already been used do not decrease the # of guesses 
// 
