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
