class Game {
    constructor() {
        this.targetNumber = null;
        this.attempts = 0;
        this.gameOver = false;
    }

    startNewGame() {
        this.targetNumber = Math.floor(Math.random() * 100) + 1;
        this.attempts = 0;
        this.gameOver = false;
    }

    checkGuess(guess) {
        if (this.gameOver) {
            console.log("The game is over. Start a new game.");
            return;
        }
        
        this.attempts++;
        
        if (guess < this.targetNumber) {
            console.log("Higher");
        } else if (guess > this.targetNumber) {
            console.log("Lower");
        } else {
            console.log(`Correct! It took you ${this.attempts} attempts.`);
            this.gameOver = true;
        }
    }
}

const game = new Game();
game.startNewGame();
game.checkGuess(50);
game.checkGuess(75);
game.checkGuess(60);
game.checkGuess(65);
game.checkGuess(63);
