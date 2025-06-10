// 영단어 데이터베이스
const wordDatabase = [
            { korean: "탑승한, ~에 타고 있는", english: "aboard" },
            { korean: "아주 쉬운", english: "as easy as that" },
            { korean: "자기 주장, 단호함", english: "assertiveness" },
            { korean: "연관, 협회", english: "association" },
            { korean: "마지막 순간에", english: "at the death" },
            { korean: "차이, 구별", english: "distinction" },
            { korean: "강렬하게, 열심히", english: "intensely" },
            { korean: "~을 보충하다", english: "make up for" },
            { korean: "거대한, 엄청난", english: "massive" },
            { korean: "~라기보다는", english: "rather than" },
            { korean: "상대성", english: "relativeness" },
            { korean: "재현 가능한", english: "reproducible" },
            { korean: "~에서 기인하다, ~의 결과이다", english: "result from" },
            { korean: "연속, 순서", english: "sequence" },
            { korean: "각성된 상태로 있다", english: "stay alert" },
            { korean: "맡다, 떠맡다", english: "take on" },
            { korean: "어느 정도는", english: "to some extent" },
            { korean: "다양하다", english: "vary" },
            { korean: "결심, 결의", english: "resolution" },
            { korean: "인식, 자각", english: "awareness" },
            { korean: "흑백 논리의", english: "black-or-white" },
            { korean: "내장된, 타고난", english: "built in" },
            { korean: "잡담하다, 대화하다", english: "chat" },
            { korean: "능력, 역량", english: "competence" },
            { korean: "수행하다, 행동", english: "conduct" },
            { korean: "해로운, 피해를 주는", english: "damaging" },
            { korean: "시위, 입증, 설명", english: "demonstration" },
            { korean: "일탈, 탈선", english: "deviation" },
            { korean: "능력; (대학의) 교수진", english: "faculty" },
            { korean: "빛나다, 빛, 온기", english: "glow" },
            { korean: "내집단", english: "in group" },
            { korean: "잘 알고 있는", english: "informed" },
            { korean: "(진로·계획 등을) 벗어나게 하다", english: "knock off track" },
            { korean: "수술복", english: "scrubs" },
            { korean: "완전히", english: "totally" },
            { korean: "대부분, 부피, 크기", english: "bulk" },
            { korean: "전임의, 전시간의", english: "full-time" },
            { korean: "짐, 부하, 짐을 싣다", english: "load" },
            { korean: "과부하를 주다, 너무 많이 싣다", english: "overload" },
            { korean: "목초지", english: "pastureland" },
            { korean: "무의미한", english: "pointless" },
            { korean: "미리 결정하다", english: "predetermine" },
            { korean: "수확하다, 거두다", english: "reap" },
            { korean: "그 다음의, 차후의", english: "subsequent" },
            { korean: "전율, 흥분", english: "thrill" },
            { korean: "무의식적으로, 무심코", english: "unknowingly" },
            { korean: "~대(對), ~에 비해", english: "versus" },
            { korean: "반전, 역전, 번복", english: "reversal" },
            { korean: "어색한, 서투른", english: "awkward" },
            { korean: "중심 체온", english: "core body temperature" },
            { korean: "서랍", english: "drawer" },
            { korean: "되는 대로의, 운에 맡기는", english: "hit-and-miss" },
            { korean: "~에도 적용되다", english: "hold true for" },
            { korean: "진지하게, 본격적으로", english: "in earnest" },
            { korean: "편안하게 해주는", english: "relaxing" },
            { korean: "완전한, 전적인 / 말하다, 발언하다", english: "utter" },
            { korean: "절대적인, 완전한", english: "absolute" },
            { korean: "성취하다, 달성하다", english: "accomplish" },
            { korean: "정확한, 정밀한", english: "accurate" },
            { korean: "획득하다, 습득하다", english: "acquire" },
            { korean: "적절한, 충분한", english: "adequate" },
            { korean: "인정하다, 받아들이다", english: "admit" },
            { korean: "채택하다, 입양하다", english: "adopt" },
            { korean: "유리한, 이익이 되는", english: "advantageous" },
            { korean: "영향을 미치다", english: "affect" },
            { korean: "분석하다", english: "analyze" },
            { korean: "접근법, 방법", english: "approach" },
            { korean: "적절한, 알맞은", english: "appropriate" },
            { korean: "대략적인, 근사한", english: "approximate" },
            { korean: "주장하다, 논증하다", english: "argue" },
            { korean: "평가하다, 사정하다", english: "assess" },
            { korean: "가정하다, 추정하다", english: "assume" },
            { korean: "보장하다, 확신시키다", english: "assure" },
            { korean: "달성하다, 얻다", english: "attain" },
            { korean: "태도, 자세", english: "attitude" },
            { korean: "속성, 특성", english: "attribute" },
            { korean: "이용할 수 있는", english: "available" },
            { korean: "기본적인, 근본적인", english: "basic" },
            { korean: "이익, 혜택", english: "benefit" },
            { korean: "범주, 부류", english: "category" },
            { korean: "도전하다, 의문을 제기하다", english: "challenge" },
            { korean: "특징, 성격", english: "characteristic" },
            { korean: "복잡한, 복합적인", english: "complex" },
            { korean: "개념, 관념", english: "concept" },
            { korean: "결론을 내리다", english: "conclude" },
            { korean: "확인하다, 입증하다", english: "confirm" },
            { korean: "의식적인, 자각하는", english: "conscious" },
            { korean: "결과, 따라서", english: "consequence" },
            { korean: "상당한, 중요한", english: "considerable" },
            { korean: "일관된, 일치하는", english: "consistent" },
            { korean: "구성하다, 이루다", english: "constitute" },
            { korean: "소비하다, 소모하다", english: "consume" },
            { korean: "포함하다, 담다", english: "contain" },
            { korean: "맥락, 상황", english: "context" },
            { korean: "대조, 대비", english: "contrast" },
            { korean: "기여하다, 공헌하다", english: "contribute" },
            { korean: "전통적인, 관습적인", english: "conventional" },
            { korean: "만들다, 창조하다", english: "create" },
            { korean: "기준, 표준", english: "criteria" },
            { korean: "비판적인, 중요한", english: "critical" },
            { korean: "문화적인", english: "cultural" },
            { korean: "정의하다, 규정하다", english: "define" },
            { korean: "보여주다, 증명하다", english: "demonstrate" },
            { korean: "묘사하다, 기술하다", english: "describe" },
            { korean: "발견하다, 감지하다", english: "detect" },
            { korean: "결정하다, 판단하다", english: "determine" },
            { korean: "발전시키다, 개발하다", english: "develop" },
            { korean: "차원, 측면", english: "dimension" }
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
