function openChildWindow() {
  childWindow = open(
    "child.html",
    "FlyingChild",
    "width=500,height=500,scrollbars=yes"
  );

  setInterval(scrollWindow, 500);
}

function scrollWindow() {
  childWindow.scrollBy(0, 50);
}
