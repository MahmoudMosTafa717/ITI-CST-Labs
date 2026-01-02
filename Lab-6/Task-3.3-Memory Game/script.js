let images = document.getElementsByTagName("img");

// now pics is ARRAY instead of object
let pics = [
  "memoryGame/1.gif",
  "memoryGame/2.gif",
  "memoryGame/3.gif",
  "memoryGame/4.gif",
  "memoryGame/5.gif",
  "memoryGame/6.gif",
  "memoryGame/1.gif",
  "memoryGame/2.gif",
  "memoryGame/3.gif",
  "memoryGame/4.gif",
  "memoryGame/5.gif",
  "memoryGame/6.gif",
];

let first = "";
let second = "";

let matchedItems = 0;

//  shuffle
function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    let rand = Math.floor(Math.random() * (i + 1));
    let temp = array[i];
    array[i] = array[rand];
    array[rand] = temp;
  }
}

// assign ids to images
for (let i = 0; i < images.length; i++) {
  images[i].id = i;

  images[i].onclick = function (e) {
    let img = e.target;

    // prevent clicking opened tile
    if (!img.src.includes("Moon.gif")) return;

    img.src = pics[img.id];

    if (first === "") {
      first = img;
      return;
    } else if (second === "") {
      second = img;
    }

    if (first !== "" && second !== "") {
      if (first.src === second.src) {
        matchedItems++;
        document.getElementsByClassName("num-of-matched")[0].innerText =
          matchedItems + "/6";

        first = "";
        second = "";

        // win condition
        if (matchedItems === 6) {
          setTimeout(function () {
            alert("Congratulations! New Round Starting...");

            matchedItems = 0;
            document.getElementsByClassName("num-of-matched")[0].innerText =
              "0/6";

            // flip all back
            for (let j = 0; j < images.length; j++) {
              images[j].src = "memoryGame/Moon.gif";
            }

            //shuffle array again
            shuffle(pics);
          }, 700);
        }
      } else {
        // mismatch -> flip back
        let f = first;
        let s = second;

        setTimeout(function () {
          f.src = "memoryGame/Moon.gif";
          s.src = "memoryGame/Moon.gif";
        }, 1000);

        first = "";
        second = "";
      }
    }
  };
}
