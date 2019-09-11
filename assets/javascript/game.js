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
// var imageContentDisplay = document.getElementById("imgage-content")


initializeGameState();

document.onkeyup = function (event) {
    var userGuess = event.key.toLowerCase();
    var correctLetter = false;

    if (userGuess.match(/^[a-z0-9]+$/i)) {
        if (!lettersGuessed.includes(userGuess)) {
            for (var j = 0; j < currentWord.length; j++) {
                if (userGuess === currentWord[j].toLowerCase()) {
                    currentWordBlank[j] = userGuess;
                    correctLetter = true;
                }
            }
            if (correctLetter) {
                if (!currentWordBlank.includes("_")) {
                    wins++;
                    initializeGameState();
                    displayImage();
                }
            }
            else {
                lettersGuessed.push(userGuess);
                guessesRemaining--;
                if (guessesRemaining === 0) {
                    initializeGameState();
                }
            }
            console.log(currentWordBlank)
            displayGameState();
        }
    }
    // else {



    // }
}


function displayGameState() {
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

function displayImage() {
   var imageContentDisplay = document.getElementById("img-content");
   imageContentDisplay.setAttribute("src", "../word-guess-game/assets/images/" + currentWord.toLowerCase() + ".png");
   imageContentDisplay.setAttribute("width", "300px");
   imageContentDisplay.setAttribute("height", "auto");   
}
