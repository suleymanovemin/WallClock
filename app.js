const weekday = document.querySelector(".weekday");
const timeLine = document.querySelector(".time");
const secondLine = document.querySelector(".second");
const minuteLine = document.querySelector(".minute");
const hourLine = document.querySelector(".hour");
const time = () => {
    let getday = new Date();
    let day = getday.getDay();
    let hour = getday.getHours() < 10 ? "0" + getday.getHours() : getday.getHours();
    let minute = getday.getMinutes() < 10 ? "0" + getday.getMinutes() : getday.getMinutes();
    let second = getday.getSeconds() < 10 ? "0" + getday.getSeconds() : getday.getSeconds();
    timeLine.textContent = `${hour}:${minute}:${second}`;
    switch (day) {
      case 1:
        weekday.textContent = "Monday";
        break;
      case 2:
        weekday.textContent = "Tuesday";
        break;
      case 3:
        weekday.textContent = "Wednesday";
        break;
      case 4:
        weekday.textContent = "Thursday";
        break;
      case 5:
        weekday.textContent = "Friday";
        break;
      case 6:
        weekday.textContent = "Saturday";
        break;
      case 0:
        weekday.textContent = "Sunday";
        break;
      default:
        break;
    }
    let secondDegrees = ((second / 60) * 360) + 90; 
    console.log(secondDegrees);
    secondLine.style.transform = ` rotate(${secondDegrees}deg)` ; 
    
    let minuteDegrees = ((minute / 60) * 360) + ((second/60)*6) + 90
    minuteLine.style.transform = `translateX(-50%) rotate(${minuteDegrees}deg)`;

    let hourDegrees = ((hour / 12) * 360) + ((minute/60)*30) + 90;
    hourLine.style.transform = `translateX(-50%) rotate(${hourDegrees}deg)`;
  
  };

setInterval(() => {
    time()
}, 1000);
