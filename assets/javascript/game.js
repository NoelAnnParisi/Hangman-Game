var options = ["nickelodeon", "seinfeld", "mtv","baywatch", "friends", "goosebumps", "fullhouse", "rugrats"];
var letter, winningWord, correctWord, wins = 0, alreadyguessed = [], correctlyGuessed = [], guessesremaining = 13, currentWord, currentWordArr, stateOfGame = false;

var computerChoose = function() {
    currentWord = options[Math.floor(Math.random() * options.length)];
    currentWordArr = currentWord.split('');
    correctlyGuessed.length = currentWordArr.length;
    console.log(currentWordArr);
    console.log("computerChoose: " + stateOfGame); 
};

var htmlReplacer = function htmlReplacer(id, html) {
    document.querySelector(id).innerHTML = html;
    console.log("htmlReplacer: " + stateOfGame);
};

var guessesLeft = function guessesLeft() {
    htmlReplacer("#guessesremaining", guessesremaining);
    console.log("guessesLeft: " + stateOfGame);
};

var placeholder = function placeholder() {
       //Create an empty string var that we can add into, similar to lettersGuessed
       currentState = '';
       for (var i = 0; i < wordLength; i++) {
       currentState += '-';
       }
       return currentState;
       }

var guessedLetters = function guessedLetters() {

	if (!alreadyguessed.includes(letter.key) && !currentWordArr.includes(letter.key)) {

		alreadyguessed.push(letter.key); 

		htmlReplacer('#alreadyguessed', alreadyguessed); 

		guessesremaining--;

	}

};


var displayWord = function displayWord() {
	console.log("displayWord: " + stateOfGame);
    for (let i = 0; i < currentWordArr.length; i++) {
        if (letter.key === currentWordArr[i]) {
            correctlyGuessed.splice(currentWordArr.indexOf(letter.key, [i]), 1, letter.key);
            htmlReplacer("#correctlyGuessed", correctlyGuessed);
        }
    }
};


var winStats = function winStats() {
	console.log("winStats: " + stateOfGame);
	console.log(currentWordArr); 
    winningWord = currentWordArr.join('');
    correctWord = correctlyGuessed.join('');
    if (winningWord === correctWord) {
        wins += 1;
        stateOfGame = false;
        htmlReplacer("#wins", wins);
        htmlReplacer("#playAgain", "To play again please press the enter key!");

	    if (winningWord === "rugrats") {
			htmlReplacer("#tvImage", "<img src=assets/images/rugrats.jpg>");
			console.log("this is working?");
		}
		if (winningWord === "fullhouse") {
			htmlReplacer("#tvImage", "<img src=assets/images/fullhouse.jpg>");
			console.log("this is working?");
		}

		if (winningWord === "goosebumps") {
			htmlReplacer("#tvImage", "<img src=assets/images/goosebumps.jpg>");
			console.log("this is working?");
		}

		if (winningWord === "baywatch") {
			htmlReplacer("#tvImage", "<img src=assets/images/baywatch.jpg>");
			console.log("this is working?");
		}

		if (winningWord === "friends") {
			htmlReplacer("#tvImage", "<img src=assets/images/friends.jpg>")
		}

		if (winningWord === "nickelodeon") {
			htmlReplacer("#tvImage", "<img src=assets/images/nickelodeon.png>")
		}

		if (winningWord === "seinfeld") {
			htmlReplacer("#tvImage", "<img src=assets/images/seinfeld.jpg>")
		}

		if (winningWord === "mtv") {
			htmlReplacer("#tvImage", "<img src=assets/images/mtv.jpg>")
		}
    }
};


/////////////////////////////////////////////////////////////////////////

document.onkeyup = function(event) {

	console.log('keyup'); 

	letter = event;
	console.log(letter.key);
    console.log("You chose " + letter.key);

    // if the key isn't a letter
    if (letter.key === 'Enter' && !stateOfGame && winningWord === correctWord) {

    	console.log(currentWordArr);
    	currentWordArr = [];
    	correctlyGuessed = [];
    	alreadyguessed = [];
    	guessesremaining = 13;
    	htmlReplacer('#correctlyGuessed', correctlyGuessed);
    	htmlReplacer('#alreadyguessed', alreadyguessed);
    	htmlReplacer('#guessesremaining', guessesremaining);
    	htmlReplacer('#tvImage', "<img src=assets/images/vintagetv.jpg>");

    	computerChoose();
    	stateOfGame = true;
    } 

    else if (letter.keyCode >= 65 && letter.keyCode <= 90) {

    	if (!stateOfGame) {

    		computerChoose();
    		stateOfGame = true;

    	}

    	// shows correctly guessed letters
    	displayWord();
    	//if winningWord === correctWord  - wins++ 
	    winStats();
    	//adds guessed letters to array & decreases guesses
	    guessedLetters(); 
    	//calculates guesses remain 
		guessesLeft();

    } else if (!letter.keyCode >= 65 && letter.keyCode <= 90) {

    	alert("Please enter a letter");

    	return;

    }

    if (guessesremaining === 0 && stateOfGame === true) {

    	alert("GAME OVER! GOODBYE!");

    }

};
