let images = document.getElementsByTagName("img");
let index = 0;
let interval;
let intervalTime = 500;

for (let i = 0; i < images.length; i++) {
  images[i].onmouseout = function () {
    interval = setInterval(function () {
      for (let j = 0; j < images.length; j++) {
        images[j].src = "marbels/marble1.jpg";
      }

      images[index].src = "marbels/marble3.jpg";

      index++;

      if (index >= images.length) index = 0;
    }, intervalTime);
  };

  images[i].onmouseover = function () {
    clearInterval(interval);
  };
}

function faster() {
  return (intervalTime -= 100);
}
function slower() {
  return (intervalTime += 100);
}
