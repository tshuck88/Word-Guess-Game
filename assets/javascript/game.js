var wins = 0;
var guessesRemaining;
var lettersGuessed;
var currentWord;
var currentWordBlank;
var possibleWords = ["Cardinals", "Falcons", "Ravens", "Bills", "Panthers", "Bears", "Bengals", "Browns", "Cowboys", "Broncos", "Lions", "Packers", "Texans", "Colts", "Jaguars", "Chiefs", "Chargers", "Rams", "Dolphins", "Vikings", "Patriots", "Saints", "Giants", "Jets", "Raiders", "Eagles", "Steelers", "49ers", "Seahawks", "Buccaneers", "Titans", "Redskins"];

var winsText = document.getElementById("wins-text");
var currentWordText = document.getElementById("current-word-text");
var guessesRemainingText = document.getElementById("guesses-remaining-text");
var lettersGuessedText = document.getElementById("letters-guessed-text");



initializeGameState();

document.onkeyup = function (event) {
    var userGuess = event.key;
    var correctLetter = false;

    if(!lettersGuessed.includes(userGuess)){
        for (var j = 0; j < currentWord.length; j++) {
            if (userGuess === currentWord[j].toLowerCase()) {
                currentWordBlank[j] = userGuess;
                correctLetter = true;
            }
        }
        if (correctLetter) {
            if(!currentWordBlank.includes("_")){
                wins++;
                initializeGameState();
            }
        }
        else {
            lettersGuessed.push(userGuess);
            guessesRemaining--;  
            if(guessesRemaining === 0){
                initializeGameState();
            }
        }
        console.log(currentWordBlank)
        displayGameState();
    }
    // console.log(userGuess)
    // console.log(lettersGuessed)
    // console.log(guessesRemaining)

}


function displayGameState(){
    currentWordText.textContent = currentWordBlank.join(" ");
    guessesRemainingText.textContent = guessesRemaining;
    winsText.textContent = wins;
    lettersGuessedText.textContent = lettersGuessed.join(", ")
}

function initializeGameState() {
    currentWord = possibleWords[Math.floor(Math.random() * possibleWords.length)];
    console.log(currentWord);
    guessesRemaining = 12;
    lettersGuessed = [];
    currentWordBlank = [];
    for (var i = 0; i < currentWord.length; i++) {
        currentWordBlank[i] = "_";
    }
    displayGameState();
}
