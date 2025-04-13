let secretNumber;    //number to guess
let attemptsLeft;    //remaining attempts
let history;         //hisotry of attempted guess


//initializes game state
function startGame() {
  secretNumber = Math.floor(Math.random() * 100) + 1;      
  attemptsLeft = 10;
  history = [];
}

//guess logic after player clicks 'guess'
function makeGuess() {
  //dom elements
  const input = document.getElementById("guessInput");
  const message = document.getElementById("message");
  const validation = document.getElementById("validation");
  const score = document.getElementById("score");
  const attempts = document.getElementById("attempts");
  const attemptsLeftDisplay = document.getElementById("attemptsLeft");
  const historyList = document.getElementById("historyList");

  //input number
  const guess = Number(input.value);

  validation.textContent = "";   //clear previous validation message

  //input validation
  if (guess < 1 || guess > 100 || isNaN(guess)) {
    validation.textContent = "Please enter a number between 1 and 100!";
    return;
  }

  //stop if no attempt left of input is disabled
  if (attemptsLeft <= 0 || input.disabled) return;

  //storing guess in history 
  history.push(guess);
  const listItem = document.createElement("li");
  listItem.innerHTML = `You guessed <span>${guess}</span> (${guess < secretNumber ? " Too low " : guess > secretNumber ? " Too high " : " Correct "})`;
  historyList.appendChild(listItem);


  //check guess 
  if (guess === secretNumber) {
    message.textContent = "🎉 Correct!";
    input.disabled = true;
  } else {
    attemptsLeft--;
    if (attemptsLeft === 0) {
      message.textContent = `💥 Game Over! `;
      input.disabled = true;
    } else {
      message.textContent = guess < secretNumber ? "📈 Too low!" : "📉 Too high!";
    }
  }

  //update score, attempts after each guess
  score.textContent = attemptsLeft;
  attempts.textContent = 10 - attemptsLeft;
  attemptsLeftDisplay.textContent = attemptsLeft;
  input.value = "";
}

//reset game, clear everything
function resetGame() {
  startGame();

  document.getElementById("guessInput").value = "";
  document.getElementById("guessInput").disabled = false;
  document.getElementById("message").textContent = "";
  document.getElementById("validation").textContent = "";
  document.getElementById("score").textContent = attemptsLeft;
  document.getElementById("attempts").textContent = 0;
  document.getElementById("attemptsLeft").textContent = attemptsLeft;
  document.getElementById("historyList").innerHTML = "";
}

//start game when page loads
window.addEventListener("DOMContentLoaded", () => {
  startGame();

  //click eventlisteners
  const guessBtn = document.getElementById("guess-btn");
  const restartBtn = document.getElementById("restart-btn");

  guessBtn.addEventListener("click", makeGuess);
  restartBtn.addEventListener("click", resetGame);
});
