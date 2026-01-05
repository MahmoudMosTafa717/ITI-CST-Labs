let form = document.getElementById("myForm");
form.addEventListener("submit", function (event) {
  let message = confirm("Are you sure you want to submit the form?");
  if (!message) {
    event.preventDefault();
  }
});

// let form = document.getElementById("myForm");
// form.addEventListener("submit", function (event) {
//   let message = confirm("Are you sure you want to submit the form?");
//   if (message) {
//     form.submit();
//   } else {
//     alert("Form submission canceled.");
//     event.preventDefault();
//   }
// });
