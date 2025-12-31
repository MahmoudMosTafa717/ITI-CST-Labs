function openChildWindow() {
  childWindow = open("child.html", "FlyingChild", "width=500,height=500");

  scrollWindow();

  function scrollWindow() {
    childWindow.scrollBy(0, 50);
    setTimeout(scrollWindow, 500);
  }
}
