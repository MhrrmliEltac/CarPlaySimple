let image = document.querySelector("img");
let container = document.querySelector(".container");

let yuxari = 0;
let left = 0;

let direction = (event) => {
  if (event.key === "w") {
    if (yuxari > 0) {
      yuxari -= 10;
      image.style.top = yuxari + "px";
      image.style.transform = "rotate(-90deg)";
    } else {
      alert("Xeta");
    }
  } else if (event.key === "a") {
    if (left > 0) {
      left -= 10;
      image.style.left = left + "px";
      image.style.transform = "rotate(180deg)";
    } else {
      alert("Xeta");
    }
  } else if (event.key === "d") {
    if (left < 300) {
      left += 10;
      image.style.left = left + "px";
      image.style.transform = "rotate(0deg)";
    } else {
      alert("Xeta");
    }
  } else if (event.key === "s") {
    if (yuxari < 350) {
      yuxari += 10;
      image.style.top = yuxari + "px";
      image.style.transform = "rotate(90deg)";
    } else {
      alert("Xeta");
    }
  }
};

window.onkeypress = function (event) {
  direction(event);
};
