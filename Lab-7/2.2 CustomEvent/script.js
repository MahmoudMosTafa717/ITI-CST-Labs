let inputField = document.getElementById("inputID");

let fireEvent;
const timer = 2000; // 30 seconds

function startInactivityTimer() {
  clearTimeout(fireEvent);

  fireEvent = setTimeout(() => {
    const custEvent = new Event("custEvent");

    inputField.addEventListener("custEvent", function () {
      console.log("No input for 30 seconds");
    });

    inputField.dispatchEvent(custEvent);
  }, timer);
}

inputField.addEventListener("input", startInactivityTimer);

startInactivityTimer();
