<!DOCTYPE html>
<html lang="ko">
<head>
  <meta charset="UTF-8" />
  <title>영어 단어 퀴즈</title>
</head>
<body>

  <h1>영어 단어 퀴즈</h1>

  <button onclick="showQuestion()">문제 출제</button>

  <div id="quizArea" style="margin-top: 20px;">
    <p id="question"></p>
    <input type="text" id="userAnswer" placeholder="뜻을 입력하세요" />
    <button onclick="checkAnswer()">정답 확인</button>
    <p id="feedback"></p>
  </div>

  <script src="script.js"></script>
</body>
</html>
✅ 📁 JavaScript (script.js)
javascript
복사
편집
// 단어 목록
const quizList = [
  { word: "apple", meaning: "사과" },
  { word: "book", meaning: "책" },
  { word: "computer", meaning: "컴퓨터" },
  { word: "sun", meaning: "태양" },
  { word: "school", meaning: "학교" }
];

let currentQuestion = null;

function showQuestion() {
  const randomIndex = Math.floor(Math.random() * quizList.length);
  currentQuestion = quizList[randomIndex];

  document.getElementById("question").textContent = `"${currentQuestion.word}"의 뜻은 무엇일까요?`;
  document.getElementById("userAnswer").value = "";
  document.getElementById("feedback").textContent = "";
}

function checkAnswer() {
  const userInput = document.getElementById("userAnswer").value.trim();

  if (!currentQuestion) {
    document.getElementById("feedback").textContent = "먼저 문제를 출제하세요.";
    return;
  }

  if (userInput === currentQuestion.meaning) {
    document.getElementById("feedback").textContent = "✅ 정답입니다!";
  } else {
    document.getElementById("feedback").textContent = `❌ 틀렸습니다. 정답은 "${currentQuestion.meaning}"입니다.`;
  }
}
