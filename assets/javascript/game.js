var wins = 0; // variable to count wins
var guessesRemaining; // variable to count guesses remaining
var lettersGuessed; // variable to store letters guessed
var currentWord; // variable to store current word
var currentWordBlank; // variable to store the current word as underscores

// array of the possible words
var possibleWords = ["Cardinals", "Falcons", "Ravens", "Bills", "Panthers", "Bears", "Bengals", "Browns", "Cowboys", "Broncos", "Lions", "Packers", "Texans", "Colts", "Jaguars", "Chiefs", "Chargers", "Rams", "Dolphins", "Vikings", "Patriots", "Saints", "Giants", "Jets", "Raiders", "Eagles", "Steelers", "49ers", "Seahawks", "Buccaneers", "Titans", "Redskins"];

// variables to get a handle on the corresponding html elements
var winsText = document.getElementById("wins-text");
var currentWordText = document.getElementById("current-word-text");
var guessesRemainingText = document.getElementById("guesses-remaining-text");
var lettersGuessedText = document.getElementById("letters-guessed-text");
var winningWordText = document.getElementById("winning-word-text");
var imageContentDisplay = document.getElementById("img-content");

initializeGameState(); // call the function to start the game on page load

document.onkeyup = function (event) { // function to listen to key events to play the game
    var userGuess = event.key.toLowerCase(); // variable to store user guesses as lower case letters
    var correctLetter = false; // set the correct letter to default as false

    if (userGuess.match(/^[a-z0-9]+$/i)) {
        if (!lettersGuessed.includes(userGuess)) { // if letters already guessed do not include the user guess
            for (var j = 0; j < currentWord.length; j++) { // then run a for loop the length of the current word
                if (userGuess === currentWord[j].toLowerCase()) { // if the user guess equals a letter in the current word
                    currentWordBlank[j] = userGuess; // then replace the correspending current word blank letter with the user guess
                    correctLetter = true; // set the correct letter to true
                }
            }
            if (correctLetter) { // if correct letter is true
                if (!currentWordBlank.includes("_")) { // and if the current word blank doesn't include any underscores
                    wins++; // then the user has won and so increase the win count by 1
                    displayImage(); // call the function to display the correspending team image and winning text
                    initializeGameState(); // call the function to reset the game 
                }
            }
            else {
                lettersGuessed.push(userGuess); // if the user guess is not correct then push that to the lettersGuessed array
                guessesRemaining--; // decrease the guesses remaining by 1
                if (guessesRemaining === 0) { // if the guess remaining equals 0 the user has lost
                    displayImage(); // display the corresponding losing image and text
                    initializeGameState(); // reset the game
                }
            }
            console.log(currentWordBlank)
            displayGameState(); // call the function to update the game text after the user has pressed a key that hasn't been guessed yet
        }
    }
    // else {



    // }
};

// function to update game text with the current game state
function displayGameState() {
    currentWordText.textContent = currentWordBlank.join(" "); // puts a space in between each letter of the current word blank
    guessesRemainingText.textContent = guessesRemaining; 
    winsText.textContent = wins;
    lettersGuessedText.textContent = lettersGuessed.join(", ") // puts a comma and space in between each letter the user has guessed
};

// function to start on page load and reset the game when the user wins or loses
function initializeGameState() {
    currentWord = possibleWords[Math.floor(Math.random() * possibleWords.length)]; // randomly generates a word in the possibleWords array
    console.log(currentWord);
    guessesRemaining = 12; // sets the initial guesses to 12
    lettersGuessed = []; // empty array to store letters guessed
    currentWordBlank = []; // empty array to store the current word letters
    for (var i = 0; i < currentWord.length; i++) { // for loop that converts each letter in the currentWordBlank array to underscores
        currentWordBlank[i] = "_";
    }
    displayGameState(); // calls the function to update the game text each time the initializeGameState function is called
};

// function to display an image depending on if the user wins or loses and what the current word is and what the winning word is
function displayImage() {
    imageContentDisplay.setAttribute("width", "300px");
    imageContentDisplay.setAttribute("height", "auto");

    if (guessesRemaining === 0) {
        imageContentDisplay.setAttribute("src", "../Word-Guess-Game/assets/images/you-lose.png");
        winningWordText.textContent = "You lost. The word was " + currentWord + ".";
    } else {
        imageContentDisplay.setAttribute("src", "../Word-Guess-Game/assets/images/" + currentWord.toLowerCase() + ".png");
        winningWordText.textContent = "You won! The word was " + currentWord + "!";
    }
};
