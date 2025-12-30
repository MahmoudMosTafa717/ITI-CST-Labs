var userName = prompt("Enter your Name:");
while (!isNaN(userName) || userName == "" || userName == null) {
  userName = prompt(
    "Invalid! Name must be characters only.\nEnter Name again:"
  );
}

// var userName = prompt("Enter your Name:");
// var nameRegex = /^[A-Za-z\s]+$/;

// while (userName == null || userName == "" || !nameRegex.test(userName)) {
//   userName = prompt(
//     "Invalid! Name must contain letters only.\nEnter Name again:"
//   );
// }

var phone = prompt("Enter Phone Number (8 digits):");
while (isNaN(phone) || phone.length != 8) {
  phone = prompt("Invalid! Phone must be 8 digits number.\nEnter again:");
}

// var phone = prompt("Enter Phone Number (8 digits):");
// var phoneRegex = /^[0-9]{8}$/;

// while (phone == null || !phoneRegex.test(phone)) {
//   phone = prompt(
//     "Invalid! Phone must be exactly 8 digits.\nEnter again:"
//   );
// }

var mobile = prompt("Enter Mobile (11 digits starting 010/011/012):");
var mobileReg = /^(010|011|012|015)[0-9]{8}$/;
while (!mobileReg.test(mobile)) {
  mobile = prompt(
    "Invalid! Must start with 010 / 011 / 012 and length 11.\nEnter again:"
  );
}

var email = prompt("Enter your Email:");
// var emailReg = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-z]{2,6}$/;
var emailReg = /^[a-zA-Z]{3}@[0-9]{3}\.com$/;
// abc@123.com
while (!emailReg.test(email)) {
  email = prompt("Invalid Email Format!\nExample: abc@123.com\nEnter again:");
}

var color = prompt("Choose a color (red / green / blue):");
while (color != "red" && color != "green" && color != "blue") {
  color = prompt("Choose ONLY (red / green / blue):");
}

var today = new Date().toDateString();

document.write("<h2 style='color:" + color + "'>Welcome " + name + "</h2>");
document.write("<p style='color:" + color + "'>Phone: " + phone + "</p>");
document.write("<p style='color:" + color + "'>Mobile: " + mobile + "</p>");
document.write("<p style='color:" + color + "'>Email: " + email + "</p>");
document.write(
  "<p style='color:" + color + "'>Today's Date: " + today + "</p>"
);
