function showMessage() {
  document.getElementById("message").textContent = "스터디메이커즈에 오신 것을 환영합니다!";
}

// 사용자가 입력한 값을 처리하는 함수
function handleInput() {
  const input = document.getElementById("userInput").value.trim();

  if (input) {
    document.getElementById("inputResult").textContent = `입력한 값: ${input}`;
  } else {
    document.getElementById("inputResult").textContent = "입력란이 비어 있습니다.";
  }
}


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

// 첫 문제 생성
window.onload = generateProblem;



