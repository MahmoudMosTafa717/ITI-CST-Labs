if (!hasCookie("name")) {
  location.href = "register.html";
}

let visits = parseInt(getCookie("visits"), 10);
visits = visits + 1;
setCookie("visits", visits.toString());

let name = getCookie("name");
let gender = getCookie("gender");
let color = getCookie("color");

let msg = document.getElementById("msg");
let count = document.getElementById("count");
let img = document.getElementById("img");

msg.innerHTML = "Welcome " + name;
msg.style.color = color;

count.innerHTML = "Visits: " + visits;
count.style.color = color;

if (gender === "male") {
  img.src = "../Task Resources/cookies/1.jpg";
} else {
  img.src = "../Task Resources/cookies/2.jpg";
}
