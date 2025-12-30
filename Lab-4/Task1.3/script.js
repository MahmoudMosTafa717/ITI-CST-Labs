function longest(str) {
  var maxWord = "";
  var temp = "";

  for (var i = 0; i <= str.length; i++) {
    if (str.charAt(i) == " " || i == str.length) {
      if (temp.length > maxWord.length) {
        maxWord = temp;
      }
      temp = "";
    } else {
      temp += str.charAt(i);
    }
  }
  return maxWord;
}

var text = prompt("Enter text:");
alert("Longest word is: " + longest(text));
