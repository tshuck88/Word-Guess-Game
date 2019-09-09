var wins = 0;
var guessesRemaining = 12;
var lettersGuessed = [];
var possibleWords = ["Cardinals", "Falcons", "Ravens", "Bills", "Panthers", "Bears", "Bengals", "Browns", "Cowboys", "Broncos", "Lions", "Packers", "Texans", "Colts", "Jaguars", "Chiefs", "Chargers", "Rams", "Dolphins", "Vikings", "Patriots", "Saints", "Giants", "Jets", "Raiders", "Eagles", "Steelers", "49ers", "Seahawks", "Buccaneers", "Titans", "Redskins"];

var winsText = document.getElementById("wins-text");
var currentWordText = document.getElementById("current-word-text");
var guessesRemainingText = document.getElementById("guesses-remaining-text");
var lettersGuessedText = document.getElementById("letters-guessed-text");

var currentWord = possibleWords[Math.floor(Math.random() * possibleWords.length)];
console.log(currentWord)

var currentWordBlank = [];
for (var i = 0; i < currentWord.length; i++){
    currentWordBlank[i] = "_ ";
}

// guessesRemainingText.textContent = guessesRemaining;
// currentWordText.textContent = currentWordBlank

console.log(currentWordBlank)



document.onkeyup = function(event) {
    var userGuess = event.key.toLowerCase;
    
    for(i = 0; i < currentWord.length; i++){
        if(userGuess === currentWord.charAt(i)){
            currentWordBlank
        }
    }
}

