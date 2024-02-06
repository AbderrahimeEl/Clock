function setDate() {
    let currentDate = new Date();
    let second = currentDate.getSeconds();
    let minute = currentDate.getMinutes();
    let hour = currentDate.getHours();
    let DegreeOfsecond = (second / 60) * 360 + 90;
    let DegreeOfminute = (minute / 60) * 360 + 90;
    let copyHour = hour;
    let DegreeOfhour;
    if (hour > 12) DegreeOfhour = (((hour - 12) * 5) / 60) * 360 + 90;
    else DegreeOfhour = ((hour * 5) / 60) * 360 + 90;
    console.log(second + " " + minute + " " + hour);
    let secondArrow = document.querySelector(".second");
    let minuteArrow = document.querySelector(".min");
    let hourArrow = document.querySelector(".hour");
    secondArrow.style.transform = `rotate(${DegreeOfsecond}deg)`;
    minuteArrow.style.transform = `rotate(${DegreeOfminute}deg)`;
    hourArrow.style.transform = `rotate(${DegreeOfhour}deg)`;
    let minuteN = document.querySelector(".minuteN");
    minuteN.textContent = minute >= 10 ? minute : "0" + minute;
    let secondN = document.querySelector(".secondN");
    secondN.textContent = second >= 10 ? second : "0" + second;
    let hourN = document.querySelector(".hourN");
    hourN.textContent = hour >= 10 ? hour : "0" + hour;
  }
  setInterval(setDate, 1000);