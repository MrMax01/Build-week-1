const timer = document.querySelector(".timer");
const progress = timer.querySelector(".progress");
const minutes = timer.querySelector(".minutes");
const seconds = timer.querySelector(".seconds");

let remainingTime = 60;

function updateTimer() {
  const minutesValue = Math.floor(remainingTime / 60)
    .toString()
    .padStart(2, "0");
  const secondsValue = (remainingTime % 60).toString().padStart(2, "0");
  minutes.textContent = minutesValue;
  seconds.textContent = secondsValue;

  const progressValue = 251.2 - (251.2 * remainingTime) / 60;
  progress.style.strokeDashoffset = progressValue;

  remainingTime--;

  if (remainingTime < 0) {
    clearInterval(timerInterval);
    minutes.textContent = "00";
    seconds.textContent = "00";
  }
}

updateTimer();
const timerInterval = setInterval(updateTimer, 1000);
