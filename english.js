// 영단어 데이터베이스
const wordDatabase = [
    { english: "apple", korean: "사과" },
    { english: "book", korean: "책" },
    { english: "cat", korean: "고양이" },
    { english: "dog", korean: "개" },
    { english: "elephant", korean: "코끼리" },
    { english: "flower", korean: "꽃" },
    { english: "guitar", korean: "기타" },
    { english: "house", korean: "집" },
    { english: "ice", korean: "얼음" },
    { english: "juice", korean: "주스" },
    { english: "key", korean: "열쇠" },
    { english: "love", korean: "사랑" },
    { english: "mountain", korean: "산" },
    { english: "night", korean: "밤" },
    { english: "ocean", korean: "바다" },
    { english: "picture", korean: "그림" },
    { english: "queen", korean: "여왕" },
    { english: "river", korean: "강" },
    { english: "sun", korean: "태양" },
    { english: "tree", korean: "나무" },
    { english: "umbrella", korean: "우산" },
    { english: "voice", korean: "목소리" },
    { english: "water", korean: "물" },
    { english: "yellow", korean: "노란색" },
    { english: "zero", korean: "영" },
    { english: "beautiful", korean: "아름다운" },
    { english: "computer", korean: "컴퓨터" },
    { english: "different", korean: "다른" },
    { english: "example", korean: "예시" },
    { english: "family", korean: "가족" },
    { english: "government", korean: "정부" },
    { english: "happiness", korean: "행복" },
    { english: "important", korean: "중요한" },
    { english: "journey", korean: "여행" },
    { english: "knowledge", korean: "지식" },
    { english: "language", korean: "언어" },
    { english: "memory", korean: "기억" },
    { english: "nature", korean: "자연" },
    { english: "opportunity", korean: "기회" },
    { english: "problem", korean: "문제" },
    { english: "question", korean: "질문" },
    { english: "responsibility", korean: "책임" },
    { english: "strength", korean: "힘" },
    { english: "technology", korean: "기술" },
    { english: "understanding", korean: "이해" },
    { english: "victory", korean: "승리" },
    { english: "wisdom", korean: "지혜" },
    { english: "wonderful", korean: "멋진" },
    { english: "yesterday", korean: "어제" },
    { english: "courage", korean: "용기" }
];

let currentWord = {};
let score = 0;
let timeLeft = 60;
let timerInterval;
let usedWords = [];

// DOM 요소들
const bodyEl = document.getElementById("mainBody");
const problemEl = document.getElementById("problem");
const answerInput = document.getElementById("answerInput");
const checkBtn = document.getElementById("checkBtn");
const resultEl = document.getElementById("result");
const scoreEl = document.getElementById("score");
const timeEl = document.getElementById("time");
const restartBtn = document.getElementById("restartBtn");

function generateProblem() {
  // 사용하지 않은 단어 중에서 랜덤 선택
  let availableWords = wordDatabase.filter(word => !usedWords.includes(word.english));
  
  // 모든 단어를 사용했으면 초기화
  if (availableWords.length === 0) {
    usedWords = [];
    availableWords = wordDatabase;
  }
  
  const randomIndex = Math.floor(Math.random() * availableWords.length);
  currentWord = availableWords[randomIndex];
  usedWords.push(currentWord.english);
  
  problemEl.textContent = `${currentWord.english} = ?`;
  answerInput.value = "";
  answerInput.focus();
}

function checkAnswer() {
  const userAnswer = answerInput.value.trim();
  if (userAnswer === "") return;
  
  const correctAnswer = currentWord.korean;
  
  if (userAnswer === correctAnswer) {
    score++;
    resultEl.textContent = "정답입니다! 🎉";
    resultEl.style.color = 'blue';
    bodyEl.style.backgroundColor = '#7fffd4';
  } else {
    resultEl.textContent = `틀렸습니다. 정답은 ${correctAnswer}입니다.`;
    resultEl.style.color = 'red';
    bodyEl.style.backgroundColor = '#ffc0cb';
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
  usedWords = [];
  scoreEl.textContent = score;
  timeEl.textContent = timeLeft;
  answerInput.disabled = false;
  checkBtn.disabled = false;
  resultEl.textContent = "";
  bodyEl.style.backgroundColor = '#c2e9fb';
  generateProblem();
  clearInterval(timerInterval);
  timerInterval = setInterval(updateTimer, 1000);
}

function endGame() {
  problemEl.textContent = "게임 종료!";
  
  // 성적에 따른 메시지
  let message = '';
  if (score >= 20) {
    message = '🏆 최고 등급! 영어 천재시네요!';
  } else if (score >= 15) {
    message = '🥇 우수! 훌륭한 실력입니다!';
  } else if (score >= 10) {
    message = '🥈 좋아요! 꾸준히 연습하세요!';
  } else if (score >= 5) {
    message = '🥉 괜찮아요! 더 열심히 해보세요!';
  } else {
    message = '📚 연습이 더 필요해요! 화이팅!';
  }
  
  resultEl.textContent = `최종 점수: ${score}점 - ${message}`;
  answerInput.disabled = true;
  checkBtn.disabled = true;
}

// 이벤트 리스너
checkBtn.addEventListener("click", checkAnswer);
restartBtn.addEventListener("click", startGame);
answerInput.addEventListener("keydown", function (e) {
  if (e.key === "Enter") {
    checkAnswer();
  }
});

// 게임 시작
window.onload = startGame;
