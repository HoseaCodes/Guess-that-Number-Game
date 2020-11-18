// Features

// Allow the player to continually be prompted to enter their guess of what the secret number is until they guess correctly
// If the player has an incorrect guess, display an alert message that informs the player:

// Whether their guess is too high, or too low, and...
// A list of all the previously guessed numbers (without showing the square brackets of an array)
// If the player has guessed the secret number:

// Display an alert message that congrats the player and informs them of how many guesses they took
// End the game play

const gameEl = document.getElementById('game');
const titleEl = document.getElementById('title');
const btn = document.getElementById('btn');
const userInput = document.getElementById('userInput');

const game = {
  title: 'Guess the Number!',
  smallestNum: parseFloat(prompt('Enter the smallest value', '0')),
  biggestNum: parseFloat(prompt('Enter the largest value', '0')),
  secretNum: null,
  prevGuesses: [],


  getGuess: function () {
    do {
      var userGuess = parseInt(prompt(`Enter a guess between ${this.smallestNum} and ${this.biggestNum}`));
    }

    while (userGuess < this.smallestNum || userGuess > this.biggestNum);
    return userGuess;
  },

  render: function (guess2, secretNum2) {
    if (guess2 === secretNum2) {
      alert(`Congrats! You guessed the number ${guess2} in ${this.prevGuesses.length} guesses!`)
    } else if (guess2 < secretNum2) {
      alert(`Your guess is too low! Previous guesses ${this.prevGuesses}`)
    } else {
      alert(`Your guess is too high! Previous guesses ${this.prevGuesses}`)
    };
  },

  play: function () {
    this.secretNum = Math.floor(Math.random() *
      (this.biggestNum - this.smallestNum + 1)) + this.smallestNum;
    do {
      var guess = this.getGuess();
      this.prevGuesses.push(guess);
      this.render(guess, this.secretNum);
    } while (guess !== this.secretNum)
    return "Game Over, Thanks for Playing."
  },



};

console.log(game.title)
titleEl.innerHTML = "<h1>" + game.title + "</h1>";



console.log(game.play());
