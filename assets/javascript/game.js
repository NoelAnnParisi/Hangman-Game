// display game prompt on the screen 

// 

	var options = ["one", "two", "three"];
	var win = 0;
	var currentWord

	document.onkeyup = function(event) {

		var userGuess = event.key;
		document.write("You chose "+ userGuess); 

		var computerChoose = function() {
			return options[Math.floor(Math.random() * options.length)];

		}

		currentWord = computerChoose();

		document.write ("The computer chose "+ computerChoice);