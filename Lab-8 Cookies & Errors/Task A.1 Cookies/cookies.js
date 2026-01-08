function setCookie(cookieName, cookieValue, expiryDate = "") {
  if (
    arguments.length < 2 ||
    typeof cookieName !== "string" ||
    typeof cookieValue !== "string"
  ) {
    throw new Error("Invalid arguments for setCookie");
  }

  let cookieStr = cookieName + "=" + cookieValue + "; path=/";

  if (expiryDate) {
    if (!(expiryDate instanceof Date)) {
      throw new Error("expiryDate must be Date object");
    }
    cookieStr += "; expires=" + expiryDate.toUTCString();
  }

  document.cookie = cookieStr;
}

function getCookie(cookieName) {
  if (arguments.length !== 1 || typeof cookieName !== "string") {
    throw new Error("Invalid arguments for getCookie");
  }

  let cookies = document.cookie.split("; "); // [key=value, key=value,...]
  let i;

  for (i = 0; i < cookies.length; i++) {
    let parts = cookies[i].split("="); // [key, value]
    if (parts[0] === cookieName) {
      return parts[1];
    }
  }

  return null;
}

// ---------- deleteCookie ----------
function deleteCookie(cookieName) {
  if (arguments.length !== 1 || typeof cookieName !== "string") {
    throw new Error("Invalid arguments for deleteCookie");
  }

  document.cookie = cookieName + "=; expires= 9-12-2002 ; path=/";
}

// ---------- allCookieList ----------
function allCookieList() {
  if (arguments.length !== 0) {
    throw new Error("allCookieList takes no arguments");
  }

  let cookies = document.cookie.split("; "); // [key=value, key=value,...]
  let result = {};
  let i;

  for (i = 0; i < cookies.length; i++) {
    let parts = cookies[i].split("="); // [key, value]
    if (parts[0] !== "") {
      result[parts[0]] = parts[1];
    }
  }

  return result;
}

// ---------- hasCookie ----------
function hasCookie(cookieName) {
  if (arguments.length !== 1 || typeof cookieName !== "string") {
    throw new Error("Invalid arguments for hasCookie");
  }

  return getCookie(cookieName) !== null;
}
