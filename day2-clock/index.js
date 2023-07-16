let hourhand = document.querySelector("div.hourhand");
let minutehand = document.querySelector("div.minutehand");
let secondhand = document.querySelector("div.secondhand");

setInterval(timer, 1000);

function timer() {
  const date = new Date();
  const second = date.getSeconds();
  const minute = date.getMinutes();
  const hour = date.getHours();
  const seconddeg = (second / 60) * 360 + 180;
  const minutedeg = (minute / 60) * 360 + 180;
  const hourdeg = (hour / 24) * 360 + 180;
  if (second === 0) {
    secondhand.style.transition = "none";
    setTimeout(() => {
      secondhand.style.transition = "all 0.05s";
    }, 100);
    console.log("test");
  }
  hourhand.style.transform = `rotate(${hourdeg}deg)`;
  minutehand.style.transform = `rotate(${minutedeg}deg)`;
  secondhand.style.transform = `rotate(${seconddeg}deg)`;
  //console.log(second);
}
