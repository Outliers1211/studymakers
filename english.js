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

// 게임 상태 변수들
let gameStarted = false;
let currentWord = {};
let score = 0;
let timeLeft = 60;
let timer;
let usedWords = [];

// DOM 요소들
const startBtn = document.getElementById('startBtn');
const gameArea = document.getElementById('gameArea');
const wordDisplay = document.getElementById('wordDisplay');
const answerInput = document.getElementById('answerInput');
const submitBtn = document.getElementById('submitBtn');
const scoreDisplay = document.getElementById('score');
const timerDisplay = document.getElementById('timer');
const resultArea = document.getElementById('resultArea');
const finalScore = document.getElementById('finalScore');
const restartBtn = document.getElementById('restartBtn');
const feedback = document.getElementById('feedback');

// 이벤트 리스너 등록
startBtn.addEventListener('click', startGame);
submitBtn.addEventListener('click', checkAnswer);
answerInput.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        checkAnswer();
    }
});
restartBtn.addEventListener('click', restartGame);

// 게임 시작 함수
function startGame() {
    gameStarted = true;
    score = 0;
    timeLeft = 60;
    usedWords = [];
    
    // UI 업데이트
    startBtn.style.display = 'none';
    gameArea.style.display = 'block';
    resultArea.style.display = 'none';
    
    // 첫 번째 단어 표시
    showNextWord();
    
    // 타이머 시작
    timer = setInterval(updateTimer, 1000);
    
    // 입력 필드에 포커스
    answerInput.focus();
}

// 다음 단어 표시 함수
function showNextWord() {
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
    
    wordDisplay.textContent = currentWord.english;
    answerInput.value = '';
    feedback.textContent = '';
    answerInput.focus();
}

// 답안 확인 함수
function checkAnswer() {
    if (!gameStarted) return;
    
    const userAnswer = answerInput.value.trim().toLowerCase();
    const correctAnswer = currentWord.korean.toLowerCase();
    
    if (userAnswer === correctAnswer || userAnswer === currentWord.korean) {
        // 정답
        score += 10;
        scoreDisplay.textContent = score;
        feedback.textContent = '정답! 🎉';
        feedback.style.color = '#28a745';
        
        // 0.5초 후 다음 단어
        setTimeout(() => {
            showNextWord();
        }, 500);
    } else {
        // 오답
        feedback.textContent = `틀렸습니다. 정답: ${currentWord.korean}`;
        feedback.style.color = '#dc3545';
        
        // 1초 후 다음 단어
        setTimeout(() => {
            showNextWord();
        }, 1000);
    }
}

// 타이머 업데이트 함수
function updateTimer() {
    timeLeft--;
    timerDisplay.textContent = timeLeft;
    
    // 시간이 10초 이하일 때 빨간색으로 표시
    if (timeLeft <= 10) {
        timerDisplay.style.color = '#dc3545';
    }
    
    // 게임 종료
    if (timeLeft <= 0) {
        endGame();
    }
}

// 게임 종료 함수
function endGame() {
    gameStarted = false;
    clearInterval(timer);
    
    // UI 업데이트
    gameArea.style.display = 'none';
    resultArea.style.display = 'block';
    finalScore.textContent = score;
    
    // 성적에 따른 메시지
    let message = '';
    if (score >= 200) {
        message = '🏆 최고 등급! 영어 천재시네요!';
    } else if (score >= 150) {
        message = '🥇 우수! 훌륭한 실력입니다!';
    } else if (score >= 100) {
        message = '🥈 좋아요! 꾸준히 연습하세요!';
    } else if (score >= 50) {
        message = '🥉 괜찮아요! 더 열심히 해보세요!';
    } else {
        message = '📚 연습이 더 필요해요! 화이팅!';
    }
    
    document.getElementById('message').textContent = message;
}

// 게임 재시작 함수
function restartGame() {
    // 초기 상태로 리셋
    gameStarted = false;
    score = 0;
    timeLeft = 60;
    usedWords = [];
    
    // UI 초기화
    startBtn.style.display = 'block';
    gameArea.style.display = 'none';
    resultArea.style.display = 'none';
    scoreDisplay.textContent = '0';
    timerDisplay.textContent = '60';
    timerDisplay.style.color = '#333';
    feedback.textContent = '';
    
    // 타이머 정리
    if (timer) {
        clearInterval(timer);
    }
}

// 페이지 로드 시 초기화
document.addEventListener('DOMContentLoaded', function() {
    restartGame();
});
