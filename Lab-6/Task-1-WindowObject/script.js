let child;
let btn = document.getElementById("btn");
btn.onclick = function openChild() {
  child = window.open("Child.html", "Child", "width=400,height=300");
  child.onload = function () {
    typeChar();
  };
};

function typeChar() {
  let text = "Hello From Mahmoud Mostafa!";
  let p = child.document.getElementById("msg");
  let charIndex = 0;

  let interval = setInterval(function () {
    if (!child || child.closed) return;

    if (charIndex < text.length) {
      p.textContent += text.charAt(charIndex);
      charIndex++;
    } else {
      clearInterval(interval);
      setTimeout(() => child.close(), 1000);
    }
  }, 200);
}
