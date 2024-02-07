let i = 0;
function setDate() {
  let currentDate = new Date();
  let second = currentDate.getSeconds();
  let minute = currentDate.getMinutes();
  let hour = currentDate.getHours();
  let milliseconds = currentDate.getMilliseconds() / 10;
  let DegreeOfsecond = (second / 60) * 360 + 90;
  let DegreeOfminute = (minute / 60) * 360 + 90;
  let DegreeOfhour;
  if (hour > 12) DegreeOfhour = (((hour - 12) * 5) / 60) * 360 + 90;
  else DegreeOfhour = ((hour * 5) / 60) * 360 + 90;
  let secondArrow = document.querySelector(".second");
  let minuteArrow = document.querySelector(".min");
  let hourArrow = document.querySelector(".hour");
  secondArrow.style.transform = `rotate(${DegreeOfsecond}deg)`;
  minuteArrow.style.transform = `rotate(${DegreeOfminute}deg)`;
  hourArrow.style.transform = `rotate(${DegreeOfhour}deg)`;
  let minuteN = document.querySelector(".minuteN");
  let secondN = document.querySelector(".secondN");
  let hourN = document.querySelector(".hourN");
  let milSeconds = document.querySelector(".centisecondN");
  minuteN.textContent = minute >= 10 ? minute : "0" + minute;
  secondN.textContent = second >= 10 ? second : "0" + second;
  hourN.textContent = hour >= 10 ? hour : "0" + hour;
  milSeconds.textContent = milliseconds.toFixed(0);
  milliseconds >= 10 ? milliseconds.toFixed(0) : "0" + milliseconds.toFixed(0);
}
setInterval(setDate, 10);

let startTime;
let elapsedTime = 0;
let intervalId;
function updateTimer() {
  const currentTime = new Date().getTime();
  elapsedTime = currentTime - startTime;
  displayTime(elapsedTime);
}

function displayTime(milliseconds) {
  const centiseconds = Math.floor((milliseconds % 1000) / 10);
  const seconds = Math.floor((milliseconds / 1000) % 60);
  const minutes = Math.floor((milliseconds / (1000 * 60)) % 60);
  const hours = Math.floor(milliseconds / (1000 * 60 * 60));
  let minuteR = document.querySelector(".minuteR");
  minuteR.textContent = minutes >= 10 ? minutes : "0" + minutes;
  let secondR = document.querySelector(".secondR");
  secondR.textContent = seconds >= 10 ? seconds : "0" + seconds;
  let hourR = document.querySelector(".hourR");
  hourR.textContent = hours >= 10 ? hours : "0" + hours;
  let centisecondR = document.querySelector(".centisecondR");
  centisecondR.textContent = centiseconds >= 10 ? centiseconds : "0" + centiseconds;
}

function startTimer() {
  if (!intervalId) {
    document.images[0].src = "images/stop.png";
    document.images[0].onclick = stopTimer;
    document.images[1].src = "images/record.png";
    document.images[1].onclick = recordValue;
    startTime = new Date().getTime() - elapsedTime;
    intervalId = setInterval(updateTimer, 10);
  }
}

function recordValue() {
  let milliseconds = elapsedTime;
  let recordedtime = document.createElement("div");
  const centiseconds = Math.floor((milliseconds % 1000) / 10);
  const seconds = Math.floor((milliseconds / 1000) % 60);
  const minutes = Math.floor((milliseconds / (1000 * 60)) % 60);
  const hours = Math.floor(milliseconds / (1000 * 60 * 60));
  recordedtime.className = "recorded";
  recordedtime.innerHTML = `
  <span class="num">${i}-</span>
  <span class="hourR">${hours >= 10 ? hours : "0" + hours}</span> :
  <span class="minuteR">${minutes >= 10 ? minutes : "0" + minutes}</span> :
  <span class="secondR">${seconds >= 10 ? seconds : "0" + seconds}</span> :
  <span class="centisecondR">${centiseconds >= 10 ? centiseconds : "0" + centiseconds}</span>`;
  document.getElementsByClassName("timei")[0].appendChild(recordedtime);
  i++;
}
function stopTimer() {
  console.log("okok");
  document.images[0].src = "images/play.png";
  document.images[0].onclick = startTimer;
  document.images[1].src = "images/reset.png";
  document.images[1].onclick = resetTimer;
  document.images[1].id = "";

  clearInterval(intervalId);
  intervalId = null;
}

function resetTimer() {
  stopTimer();
  document.getElementsByClassName("timei")[0].innerHTML = "";
  elapsedTime = 0;
  i = 0;
  displayTime(elapsedTime);
}
