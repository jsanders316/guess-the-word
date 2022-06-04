// guessed letters //
const guessedLettersElement = document.querySelector(".guessed-letters");
// guess botton //
const guessButton = document.querySelector(".guess");
// guess letter input //
const letterInput = document.querySelector(".letter");
// where word in progess will appear //
const wordInProgress = document.querySelector(".word-in-progress");
// remaining guesses //
const remainingGuesses = document.querySelector("remaining");
// displayed remaing guesses //
const remainingGuessesSpan = document.querySelector(".remaining span");
// where messages will appear //
const message = document.querySelector(".message");
// play again button //
const playAgainButton = document.querySelector(".play-again");

const word = "magnolia";
const guessedLetters = [];

const placeholder = function (word) {
  const placeHolderLetters = [];
  for (const letter of word) {
    console.log(letter);
    placeHolderLetters.push("●");
  }
  wordInProgress.innerText = placeHolderLetters.join("");
};

placeholder(word);

guessButton.addEventListener("click", function (e) {
  e.preventDefault();
  message.innerText = "";
  const guess = letterInput.value;
  const goodGuess = validateInput(guess);
  if (goodGuess) {
    makeGuess(guess);
  }
  letterInput.value = "";
});

const validateInput = function (input) {
  const acceptedLetter = /[a-zA-Z]/;
  if (input.length === 0) {
    message.innerText = "Please enter a letter.";
  } else if (input.length > 1) {
    message.innerText = "Please enter a single letter.";
  } else if (!input.match(acceptedLetter)) {
    message.innerText = "Please enter a letter from A to Z";
  } else {
    return input;
  }
};

const makeGuess = function (guess) {
  guess = guess.toUpperCase();
  if (guessedLetters.includes(guess)) {
    message.innerText = "You already guessed that letter. Try again.";
  } else {
    guessedLetters.push(guess);
    console.log(guessedLetters);
  }
};
