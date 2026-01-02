let img = document.images[0];
let btnNext = document.getElementById("nextBtn");
let btnPrev = document.getElementById("prevBtn");
let btnSlideShow = document.getElementById("slideShowBtn");
let btnStop = document.getElementById("stopBtn");

let imageArray = [
  "SlideShow/1.jpg",
  "SlideShow/2.jpg",
  "SlideShow/3.jpg",
  "SlideShow/4.jpg",
  "SlideShow/5.jpg",
  "SlideShow/6.jpg",
];

let index = 0;

btnNext.onclick = function nextImage() {
  index++;
  if (index >= imageArray.length) {
    index = imageArray.length - 1;
  }
  img.src = imageArray[index];
};

btnPrev.onclick = function prevImage() {
  index--;
  if (index <= 0) {
    index = 0;
  }
  img.src = imageArray[index];
};

let slideShowInterval;
btnSlideShow.onclick = function startSlideShow() {
  slideShowInterval = setInterval(() => {
    index++;
    if (index >= imageArray.length) {
      index = 0;
    }
    img.src = imageArray[index];
  }, 1000);
};

btnStop.onclick = function stopSlideShow() {
  clearInterval(slideShowInterval);
};
