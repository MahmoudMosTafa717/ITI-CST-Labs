var s = prompt("Enter a string:");
var sens = confirm("Case sensitive?");

if (!sens) s = s.toLowerCase();

var reversedWord = "";
for (var i = s.length - 1; i >= 0; i--) {
  reversedWord += s.charAt(i);
}

if (s == reversedWord) {
  alert("Palindrome");
} else {
  alert("NOT palindrome");
}

// var str = prompt("Enter a string:");
// var sensitive = confirm("Case sensitive?");

// if (!sensitive) {
//   str = str.toLowerCase();
// }

// var isPalindrome = true;

// for (var i = 0; i < str.length / 2; i++) {
//   if (str.charAt(i) != str.charAt(str.length - 1 - i)) {
//     isPalindrome = false;
//   }
// }

// if (isPalindrome) alert("Palindrome");
// else alert("NOT Palindrome");
