let childWindow;
let timer;
let direction = 1;

function openChildWindow() {
  childWindow = open("child.html", "FlyingChild", "width=200,height=200");

  moveWindow();
}

function moveWindow() {
  if (!childWindow || childWindow.closed) return;

  let x = childWindow.screenX;
  let y = childWindow.screenY;

  x += 15 * direction;
  y += 15 * direction;

  const maxY = window.screen.availHeight - childWindow.outerHeight;
  const maxX = window.screen.availWidth - childWindow.outerWidth;

  if (x <= 0) direction = 1;
  if (x >= maxX) direction = -1;

  if (y <= 0) direction = 1;
  if (y >= maxY) direction = -1;

  childWindow.moveTo(x, y);
  // childWindow.resizeTo(200, 200);
  childWindow.focus();

  timer = setTimeout(moveWindow, 100);
}

function stopChildWindow() {
  clearTimeout(timer);
  if (childWindow && !childWindow.closed) childWindow.close();
}
