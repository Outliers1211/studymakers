function showMessage() {
  // 영어 단어 퀴즈 데이터
  const quizList = [
    { word: "apple", meaning: "사과" },
    { word: "book", meaning: "책" },
    { word: "computer", meaning: "컴퓨터" },
    { word: "sun", meaning: "태양" },
    { word: "school", meaning: "학교" }
  ];

  // 랜덤 문제 선택
  const randomIndex = Math.floor(Math.random() * quizList.length);
  const quiz = quizList[randomIndex];

  // 화면에 출력
  document.getElementById("message").textContent = `"${quiz.word}"의 뜻은 무엇일까요?`;
}
