// 영단어 데이터베이스
const wordDatabase = [
  { korean: "적응하다, 조정하다", english: "adapt" },
  { korean: "정확한", english: "precise" },
  { korean: "분석하다", english: "analyze" },
  { korean: "명백한, 분명한", english: "apparent" },
  { korean: "접근법", english: "approach" },
  { korean: "평가하다", english: "assess" },
  { korean: "가정하다", english: "assume" },
  { korean: "다양한", english: "diverse" },
  { korean: "효율적인", english: "efficient" },
  { korean: "정교한, 복잡한", english: "elaborate" },
  { korean: "강조하다", english: "emphasize" },
  { korean: "환경", english: "environment" },
  { korean: "필수적인", english: "essential" },
  { korean: "증거", english: "evidence" },
  { korean: "진화하다, 발전하다", english: "evolve" },
  { korean: "유연한", english: "flexible" },
  { korean: "형성하다, 구성하다", english: "formulate" },
  { korean: "함축하다, 암시하다", english: "imply" },
  { korean: "결과, 영향", english: "implication" },
  { korean: "개인의", english: "individual" },
  { korean: "정보를 얻다", english: "inform" },
  { korean: "혁신", english: "innovation" },
  { korean: "통합하다", english: "integrate" },
  { korean: "해석하다", english: "interpret" },
  { korean: "관련시키다, 관련되다", english: "involve" },
  { korean: "주요한, 지배적인", english: "major" },
  { korean: "방법론", english: "methodology" },
  { korean: "최소의", english: "minimal" },
  { korean: "결과, 아웃풋", english: "outcome" },
  { korean: "관점", english: "perspective" },
  { korean: "잠재적인", english: "potential" },
  { korean: "이전의", english: "previous" },
  { korean: "원리, 원칙", english: "principle" },
  { korean: "우선순위", english: "priority" },
  { korean: "과정, 절차", english: "procedure" },
  { korean: "생산적인", english: "productive" },
  { korean: "촉진하다, 증진하다", english: "promote" },
  { korean: "제공하다", english: "provide" },
  { korean: "인식하다", english: "recognize" },
  { korean: "관련된", english: "relevant" },
  { korean: "대표하다, 나타내다", english: "represent" },
  { korean: "자원", english: "resource" },
  { korean: "제한하다", english: "restrict" },
  { korean: "중요한, 상당한", english: "significant" },
  { korean: "해결책", english: "solution" },
  { korean: "특정한", english: "specific" },
  { korean: "구조", english: "structure" },
  { korean: "충분한", english: "sufficient" },
  { korean: "지원하다, 지지하다", english: "support" },
  { korean: "지속 가능한", english: "sustainable" },
  { korean: "체계적인", english: "systematic" },
  { korean: "기술", english: "technique" },
  { korean: "이론", english: "theory" },
  { korean: "전통적인", english: "traditional" },
  { korean: "이해하다", english: "understand" },
  { korean: "다양성", english: "variety" },
  { korean: "검증하다", english: "verify" },
  { korean: "시각화하다", english: "visualize" },
  { korean: "획득하다", english: "acquire" },
  { korean: "유리한", english: "advantageous" },
  { korean: "대안", english: "alternative" },
  { korean: "분석", english: "analysis" },
  { korean: "주장하다", english: "assert" },
  { korean: "귀속시키다", english: "attribute" },
  { korean: "권위", english: "authority" },
  { korean: "인식, 자각", english: "awareness" },
  { korean: "이점, 혜택", english: "benefit" },
  { korean: "역량", english: "capability" },
  { korean: "범주", english: "category" },
  { korean: "특징", english: "characteristic" },
  { korean: "일관된", english: "consistent" },
  { korean: "구성하다", english: "constitute" },
  { korean: "소비하다", english: "consume" },
  { korean: "맥락", english: "context" },
  { korean: "기여하다", english: "contribute" },
  { korean: "기준", english: "criteria" },
  { korean: "결정적인", english: "crucial" },
  { korean: "정의하다", english: "define" },
  { korean: "시연하다, 입증하다", english: "demonstrate" },
  { korean: "설명하다", english: "describe" },
  { korean: "발견하다, 감지하다", english: "detect" },
  { korean: "결정하다", english: "determine" },
  { korean: "개발하다", english: "develop" },
  { korean: "차원", english: "dimension" },
  { korean: "구별하다", english: "distinguish" },
  { korean: "분배하다", english: "distribute" },
  { korean: "효과적인", english: "effective" },
  { korean: "출현하는, 새로 나타나는", english: "emerging" },
  { korean: "강화하다", english: "enhance" },
  { korean: "본질적인", english: "inherent" },
  { korean: "초기, 원래의", english: "initial" },
  { korean: "조사하다", english: "investigate" },
  { korean: "유지하다", english: "maintain" },
  { korean: "주목할 만한", english: "notable" },
  { korean: "목표, 목적", english: "objective" },
  { korean: "관찰하다", english: "observe" },
  { korean: "발생하다", english: "occur" },
  { korean: "운영상의", english: "operational" },
  { korean: "기회", english: "opportunity" },
  { korean: "결정하다", english: "resolve" },
  { korean: "엄격한", english: "rigorous" },
  { korean: "역할", english: "role" },
  { korean: "설정하다", english: "set up" },
  { korean: "유사한", english: "similar" },
  { korean: "전략", english: "strategy" },
  { korean: "결과적인", english: "subsequent" },
  { korean: "합성하다, 종합하다", english: "synthesize" },
  { korean: "변환하다", english: "transform" },
  { korean: "실행하다, 구현하다", english: "implement" },
  { korean: "가변적인", english: "variable" },
  { korean: "포괄적인", english: "comprehensive" },
  { korean: "대조하다", english: "contrast" },
  { korean: "제공하다", english: "render" },
  { korean: "필수 조건", english: "prerequisite" },
  { korean: "주요한", english: "primary" }
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
  let availableWords = wordDatabase.filter(word => !usedWords.includes(word.korean));
  
  // 모든 단어를 사용했으면 초기화
  if (availableWords.length === 0) {
    usedWords = [];
    availableWords = wordDatabase;
  }
  
  const randomIndex = Math.floor(Math.random() * availableWords.length);
  currentWord = availableWords[randomIndex];
  usedWords.push(currentWord.korean);
  
  problemEl.textContent = `${currentWord.korean} = ?`;
  answerInput.value = "";
  answerInput.focus();
}

function checkAnswer() {
  const userAnswer = answerInput.value.trim();
  if (userAnswer === "") return;
  
  const correctAnswer = currentWord.english;
  
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
