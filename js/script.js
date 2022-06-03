// guessed letters //
const guessedLetters = document.querySelector(".guessed-letters");
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
  const guess = letterInput.value;
  console.log(guess);
  letterInput.value = "";
});
