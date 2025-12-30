var str = prompt("Enter a string:");
var ch = prompt("Which character to count?");
var sens = confirm("Case sensitive?");

var count = 0;

if (!sens) {
  str = str.toLowerCase();
  ch = ch.toLowerCase();
}

for (var i = 0; i < str.length; i++) {
  if (str.charAt(i) == ch) {
    count++;
  }
}

alert("Count = " + count);
