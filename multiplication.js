let num1, num2;
let score = 0;
let timeLeft = 60;
let timerInterval;

const problemEl = document.getElementById("problem");
const answerInput = document.getElementById("answerInput");
const checkBtn = document.getElementById("checkBtn");
const resultEl = document.getElementById("result");
const scoreEl = document.getElementById("score");
const timeEl = document.getElementById("time");
const restartBtn = document.getElementById("restartBtn");

function generateProblem() {
  num1 = Math.floor(Math.random() * 10) + 1;
  num2 = Math.floor(Math.random() * 10) + 1;
  problemEl.textContent = `${num1} × ${num2} = ?`;
  answerInput.value = "";
  answerInput.focus();
}

function checkAnswer() {
  const userAnswer = parseInt(answerInput.value);
  const correctAnswer = num1 * num2;

  if (isNaN(userAnswer)) return; // Don't proceed if nothing typed

  if (userAnswer === correctAnswer) {
    score++;
    resultEl.textContent = "정답입니다! 🎉";
  } else {
    resultEl.textContent = `틀렸습니다. 정답은 ${correctAnswer}입니다.`;
  }

  scoreEl.textContent = score;
  generateProblem();
}

function updateTimer() {
  timeLeft--;
  timeEl.textContent = timeLeft;

  if (timeLeft <= 0) {
    clearInterval(timerInterval);
    endGame();
  }
}

function startGame() {
  score = 0;
  timeLeft = 60;
  scoreEl.textContent = score;
  timeEl.textContent = timeLeft;
  resultEl.textContent = "";
  answerInput.disabled = false;
  checkBtn.disabled = false;

  generateProblem();

  clearInterval(timerInterval);
  timerInterval = setInterval(updateTimer, 1000);
}

function endGame() {
  problemEl.textContent = "게임 종료!";
  resultEl.textContent = `최종 점수: ${score}점`;
  answerInput.disabled = true;
  checkBtn.disabled = true;
}

checkBtn.addEventListener("click", checkAnswer);
restartBtn.addEventListener("click", startGame);

answerInput.addEventListener("keydown", function (e) {
  if (e.key === "Enter") {
    checkAnswer();
  }
});


window.onload = startGame;
