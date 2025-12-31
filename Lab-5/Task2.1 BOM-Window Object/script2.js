let childWindow;
let interval;
let direction = 1;

function openChildWindow() {
  childWindow = open("child.html", "FlyingChild", "width=200,height=200");
  interval = setInterval(moveWindow, 30);
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
  childWindow.resizeTo(200, 200);
  childWindow.focus();
}

function stopChildWindow() {
  clearInterval(interval);
  if (childWindow && !childWindow.closed) childWindow.close();
}
