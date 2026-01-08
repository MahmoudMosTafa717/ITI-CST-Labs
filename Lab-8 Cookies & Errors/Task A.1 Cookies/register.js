function saveData() {
  let name = document.getElementById("name").value;
  let gender = document.getElementById("gender").value;
  let color = document.getElementById("color").value;

  if (name === "" || gender === "" || color === "") {
    alert("Fill all fields");
    return;
  }

  let expiry = new Date();
  expiry.setDate(expiry.getDate() + 7);

  setCookie("name", name, expiry);
  setCookie("gender", gender, expiry);
  setCookie("color", color, expiry);
  setCookie("visits", "0", expiry);

  location.href = "profile.html";
}
