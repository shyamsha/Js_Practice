let countdownInterval;
let remainingSeconds = 0;

const inputField = document.getElementById("seconds-input");
const startButton = document.getElementById("start-btn");
const resetButton = document.getElementById("reset-btn");
const timerDisplay = document.getElementById("timer-display");

// Function to format time (MM:SS)
function formatTime(seconds) {
  const minutes = Math.floor(seconds / 60);
  const secs = seconds % 60;
  return `${String(minutes).padStart(2, "0")}:${String(secs).padStart(2, "0")}`;
}

// Start timer function
function startTimer() {
  if (!inputField || inputField.value <= 0) {
    alert("Please enter a valid time in seconds");
    return;
  }
  remainingSeconds = parseInt(inputField.value);
  timerDisplay.textContent = formatTime(remainingSeconds);
  inputField.disabled = true;
  startButton.disabled = true;
  countdownInterval = setInterval(() => {
    remainingSeconds--;
    timerDisplay.textContent = formatTime(remainingSeconds);
    if (remainingSeconds <= 0) {
      clearInterval(countdownInterval);
      alert("Time's up!");
      resetTimer();
    }
  }, 1000);
}

// Reset timer function
function resetTimer() {
  clearInterval(countdownInterval);
  remainingSeconds = 0;
  inputField.value = "";
  timerDisplay.textContent = "00:00";
  inputField.disabled = false;
  startButton.disabled = false;
}

startButton.addEventListener("click", startTimer);
resetButton.addEventListener("click", resetTimer);
