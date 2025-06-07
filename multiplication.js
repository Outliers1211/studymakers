let num1, num2;

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
    document.getElementById("result").textContent = "정답입니다! 🎉";
  } else {
    document.getElementById("result").textContent = `틀렸습니다. 정답은 ${correctAnswer}입니다.`;
  }

  setTimeout(generateProblem, 2000);
}

window.onload = generateProblem;
