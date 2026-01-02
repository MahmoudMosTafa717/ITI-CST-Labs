let querySearch = window.location.search;
console.log(querySearch);
// ?name=Mahmoud+Mostafa&email=mhmodmost121222%40gmail.com&password=aa&job+title=web+dev&mobile=01061598031&address=Fayoum

let name = querySearch.split("&")[0].split("=")[1].replace("+", " ");
let email = querySearch.split("&")[1].split("=")[1].replace("%40", "@");
let password = querySearch.split("&")[2].split("=")[1];
let jobTitle = querySearch.split("&")[3].split("=")[1].replace("+", " ");
let mobile = querySearch.split("&")[4].split("=")[1];
let address = querySearch.split("&")[5].split("=")[1].replace("+", " ");

// for (let i = 0; i < querySearch.length; i++) {
//   query = querySearch
//     .split("&")
//     [i].split("=")[1]
//     .replaceAll("+", " ")
//     .replaceAll("%40", "@");
//   console.log(query);
// }

let pName = document.getElementsByClassName("name")[0];
let pEmail = document.getElementsByClassName("email")[0];
let pJobTitle = document.getElementsByClassName("jobTitle")[0];
let pMobile = document.getElementsByClassName("mobile")[0];
let pAddress = document.getElementsByClassName("address")[0];

pName.innerHTML = name;
pEmail.innerHTML = email;
pJobTitle.innerHTML = jobTitle;
pMobile.innerHTML = mobile;
pAddress.innerHTML = address;

let vendor = window.navigator.userAgent;
console.log(vendor);

function isChrome() {
  const ua = navigator.userAgent;
  return ua.includes("Chrome") && !ua.includes("Edg") && !ua.includes("OPR");
}

if (!isChrome()) {
  let browserAdvice = document.getElementById("browserAdvice");
  browserAdvice.textContent = "Please use Google Chrome !!";
  browserAdvice.style.color = "red";
}
