var gameWords = ["nickelodeon", "seinfeld", "mtv","baywatch", "friends", "goosebumps", "fullhouse", "rugrats"];
var randomWord = gameWords[Math.floor(Math.random()*(gameWords.length))];
var winningWordArr = randomWord.split("");
var selectedWord = randomWord.split("");
var guessedLetters = [];
var userGuess = "";
var joinedWord;
var joinedGuessedLetters;
var numberOfGuesses = 11;
var wins = 0;
var lose = 0;

document.onkeyup = function(event){
    userGuess = event.key;
    console.log(userGuess);
    compareLetters();
    winOrLose();
}

var htmlReplacer = function htmlReplacer(id, html) {
    document.querySelector(id).innerHTML = html;
};

var blankSpaces = function blankSpaces() {

    for(let i = 0; i < winningWordArr.length; i ++) {

        winningWordArr[i] = " _ ";
        htmlReplacer("#correctlyGuessed", winningWordArr.join(''));
    }

    console.log(winningWordArr);
    console.log(selectedWord);
}

var compareLetters = function compareLetters() {

    joinedWord = selectedWord.join("");
    joinedGuessedLetters = guessedLetters.join("");

    if (!joinedWord.includes(userGuess) && !joinedGuessedLetters.includes(userGuess)){

        guessedLetters.push(userGuess);
        htmlReplacer('#alreadyguessed', guessedLetters);

        numberOfGuesses --;
        htmlReplacer('#guessesremaining', numberOfGuesses);

        return;

    } else {

        for(let i = 0; i < selectedWord.length; i ++) {
            
            if (userGuess === selectedWord[i]) {

                winningWordArr[i] = userGuess;
                htmlReplacer("#correctlyGuessed", winningWordArr.join(''));

            }  
        }   
        
    }
}

var winOrLose = function winOrLose() {

    if (joinedWord === winningWordArr.join("")){

        changeImage();
        wins ++;
        htmlReplacer("#wins", wins);
        htmlReplacer("#playAgain", "Radical, you did it!");  
        htmlReplacer("#restart","<button type='button'>Restart?</button>");
    };

    if (numberOfGuesses === 0) {

        htmlReplacer("#guessesremaining", "All of your guesses are gone! Do you want to play again?");
        htmlReplacer("#playMore","<button type='button'>Play Again?</button>");

    }
}

var changeImage = function changeImage () {

    console.log("is this running?")

    if (joinedWord === "rugrats") {
        htmlReplacer("#tvImage", "<img src=assets/images/rugrats.jpg>");
        console.log("this is working?");
        htmlReplacer()
    }

    if (joinedWord === "fullhouse") {
         htmlReplacer("#tvImage", "<img src=assets/images/fullhouse.jpg>");
         console.log("this is working?");
    }

    if (joinedWord === "goosebumps") {
         htmlReplacer("#tvImage", "<img src=assets/images/goosebumps.jpg>");
         console.log("this is working?");
    }

     if (joinedWord === "baywatch") {
         htmlReplacer("#tvImage", "<img src=assets/images/baywatch.jpg>");
         console.log("this is working?");
    }

     if (joinedWord === "friends") {
         htmlReplacer("#tvImage", "<img src=assets/images/friends.jpg>")
    }

     if (joinedWord === "nickelodeon") {
         htmlReplacer("#tvImage", "<img src=assets/images/nickelodeon.png>")
    }

     if (joinedWord === "seinfeld") {
         htmlReplacer("#tvImage", "<img src=assets/images/seinfeld.jpg>")
    }

     if (joinedWord === "mtv") {
         htmlReplacer("#tvImage", "<img src=assets/images/mtv.jpg>")
    }
}

$("#restart").on("click", function(){

    restartGame();

});

$("#playMore").on("click", function(){

    var gameWords = ["nickelodeon", "seinfeld", "mtv","baywatch", "friends", "goosebumps", "fullhouse", "rugrats"];
    randomWord = gameWords[Math.floor(Math.random()*(gameWords.length))];
    winningWordArr = randomWord.split("");
    selectedWord = randomWord.split("");
    $('#alreadyguessed').empty();
    $('#guessesremaining').empty();
    $('#playMore').empty();
    guessedLetters = [];
    userGuess = "";
    joinedWord;
    joinedGuessedLetters;
    blankSpaces();
    compareLetters();
    wins = 0;
    lose = 0;
    numberOfGuesses = 11;
    htmlReplacer('#guessesremaining', numberOfGuesses);



})

var restartGame = function restartGame() {

    var gameWords = ["nickelodeon", "seinfeld", "mtv","baywatch", "friends", "goosebumps", "fullhouse", "rugrats"];
    randomWord = gameWords[Math.floor(Math.random()*(gameWords.length))];
    winningWordArr = randomWord.split("");
    selectedWord = randomWord.split("");
    $('#alreadyguessed').empty();
    guessedLetters = [];
    userGuess = "";
    joinedWord;
    joinedGuessedLetters;
    blankSpaces();
    compareLetters();
}

