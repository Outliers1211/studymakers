let num1, num2;
let score = 0;
let timeLeft = 60;
let timerInterval;

function generateProblem() {
  num1 = Math.floor(Math.random() * 10) + 1;
  num2 = Math.floor(Math.random() * 10) + 1;
  document.getElementById("problem").textContent = `${num1} × ${num2} = ?`;
  document.getElementById("answerInput").value = "";
  document.getElementById("result").textContent = "";
}

function checkAnswer() {
  const userAnswer = parseInt(document.getElementById("answerInput").value);
  const correctAnswer = num1 * num2;

  if (userAnswer === correctAnswer) {
    score++;
    document.getElementById("result").textContent = "정답입니다! 🎉";
  } else {
    document.getElementById("result").textContent = `틀렸습니다. 정답은 ${correctAnswer}입니다.`;
  }

  document.getElementById("score").textContent = score;
  generateProblem();
}

function updateTimer() {
  timeLeft--;
  document.getElementById("time").textContent = timeLeft;

  if (timeLeft <= 0) {
    clearInterval(timerInterval);
    endGame();
  }
}

function startGame() {
  score = 0;
  timeLeft = 60;
  document.getElementById("score").textContent = score;
  document.getElementById("time").textContent = timeLeft;
  document.getElementById("answerInput").disabled = false;
  document.querySelector("button[onclick='checkAnswer()']").disabled = false;

  generateProblem();

  clearInterval(timerInterval);
  timerInterval = setInterval(updateTimer, 1000);
}

function endGame() {
  document.getElementById("problem").textContent = "게임 종료!";
  document.getElementById("result").textContent = `최종 점수: ${score}점`;
  document.getElementById("answerInput").disabled = true;
  document.querySelector("button[onclick='checkAnswer()']").disabled = true;
}

window.onload = startGame;

